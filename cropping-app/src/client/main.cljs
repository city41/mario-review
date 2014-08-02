(ns daisy.client.main
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [cljs.core.async :refer [put! chan <!]]
            [cljs.nodejs :as node]
            [daisy.client.constants :as c]
            [daisy.client.components.intro-view :as intro-view]
            [daisy.client.components.canvas-view :as canvas-view]
            [daisy.client.components.canvas-controls :as canvas-controls]
            [daisy.client.components.rectangle-selection :as rectangle-selection]
            [daisy.client.components.tab-view :as tab-view]
            [daisy.client.components.crop-view :as crop-view]
            [daisy.client.components.erase-view :as erase-view]
            [daisy.client.components.swap-view :as swap-view]
            [daisy.client.components.trim-view :as trim-view]
            [daisy.client.components.scale-up-view :as scale-up-view]
            [daisy.client.components.scale-down-view :as scale-down-view]
            [daisy.client.components.export-view :as export-view]
            [daisy.client.components.progress-bar :as progress-bar]
            [daisy.client.tools.crop-tool :as crop-tool]
            [daisy.client.tools.erase-tool :as erase-tool]
            [daisy.client.tools.swap-tool :as swap-tool]
            [daisy.client.tools.trim-tool :as trim-tool]
            [daisy.client.tools.scale-tool :as scale-tool])
  (:import [goog.events EventType]))

(enable-console-print!)

(def app-state (atom {:current-file-name nil
                      :current-frame-index 0
                      :selection nil
                      :playing false
                      :prev-frames nil
                      :frames nil
                      :prev-frame-width nil
                      :prev-frame-height nil
                      :frame-width c/full-frame-width
                      :frame-height c/full-frame-height
                      :load-progress 0
                      :action-chan (chan)}))

(defn update-frames
  ([app frames]
     (update-frames app frames (:frame-width @app) (:frame-height @app)))
  ([app frames w h]
     (om/update! app :prev-frames (:frames @app))
     (om/update! app :prev-frame-width (:frame-width @app))
     (om/update! app :prev-frame-height (:frame-height @app))
     (om/update! app :frames frames)
     (om/update! app :frame-width w)
     (om/update! app :frame-height h)))

(def ipc (node/require "ipc"))

(.on ipc "frames-loaded" (fn [load-spec]
                        (put! (:action-chan @app-state) {:op :frames-loaded :arg load-spec })))

(.on ipc "new-file-chosen" (fn [new-file-name]
                             (put! (:action-chan @app-state) {:op :new-file :arg new-file-name})))

;; 38 up
;; 40 down
;; 37 left
;; 39 right
(defn on-key-down [e]
  (let [chan (:action-chan @app-state)
        keymap {38 [:y dec] 40 [:y inc] 37 [:x dec] 39 [:x inc]}
        dir (keymap (.-keyCode e))]
    (when dir
      (.preventDefault e)
      (put! chan {:op :nudge :arg dir}))))
    

(.addEventListener js/window "keydown" on-key-down true)

(defmulti perform-action (fn [action owner app] (:op action)))

(defmethod perform-action :undo [_ owner app]
  (let [prev-frames (:prev-frames @app)
        pw (:prev-frame-width @app)
        ph (:prev-frame-height @app)]
    (om/update! app :frame-width pw)
    (om/update! app :frame-height ph)
    (om/update! app :frames prev-frames)
    (om/update! app :prev-frames nil)))

(defmethod perform-action :trim [{trim-spec :arg} owner app]
  (let [frames (:frames @app)
        {from :from to :to} trim-spec]
    (trim-tool/trim-frames frames from to
                           (fn [trimmed-frames]
                             (om/update! app :current-frame-index 0)
                             (update-frames app trimmed-frames)))))

(defmethod perform-action :nudge [{nudge-spec :arg} owner app]
  (let [selection (:selection @app)
        dir (first nudge-spec)
        op (second nudge-spec)]
    (when selection
      (om/update! app :selection (assoc selection dir (op (dir selection)))))))

(defmethod perform-action :export-screenshot [{base64-str :arg} owner app]
  (.send ipc "create-screenshot" base64-str))

(defmethod perform-action :capture-frame-for-video [{frame-spec :arg} owner app]
  (let [{index :frame-index total :total data :base64} frame-spec
        progress (/ (inc index) total)]
    (om/update! app :load-progress progress)
    (.send ipc "capture-frame-for-video" #js {:frameindex index
                                              :total total
                                              :base64 data
                                              })))

(defmethod perform-action :capture-frame-for-raw [{frame-spec :arg} owner app]
  (let [{index :frame-index total :total frame :frame} frame-spec
        progress (/ (inc index) total)]
    (om/update! app :load-progress progress)
    (.send ipc "capture-frame-for-raw" #js {:frameindex index
                                              :total total
                                              :frame frame
                                              })))

(defmethod perform-action :new-file [{new-file-name :arg} owner app]
  (om/update! app :current-file-name new-file-name)
  (om/update! app :frames nil)
  (om/update! app :prev-frames nil)
  (om/update! app :frame-width c/full-frame-width)
  (om/update! app :frame-height c/full-frame-height))

(defmethod perform-action :frames-loaded [{load-spec :arg} owner app]
  (let [frames (or (:frames @app) #js [])
        push (.-push frames)]
    (.apply push frames (.-frames load-spec))
    (let [progress (/ (alength frames) (.-total load-spec))]
      (om/update! app :frames frames)
      (om/update! app :load-progress progress)
      (om/update! app :current-frame-index (if (>= progress 1) 0 (dec (alength frames)))))))

(defn get-progress-cb [app]
  (fn [current total]
    (om/update! app :load-progress (/ current total))))

(defmethod perform-action :swap [_ owner app]
  (let [props @(om/get-props owner)
        frames (:frames props)]
    (swap-tool/swap-frames frames
                           (fn [swapped-frames]
                             (update-frames app swapped-frames))
                           (get-progress-cb app))))

(defmethod perform-action :erase [{selection :arg} owner app]
  (let [props @(om/get-props owner)
        {frames :frames frame-width :frame-width frame-height :frame-height} props]
    (erase-tool/erase-frames frames frame-width frame-height selection
                             (fn [erased-frames]
                               (om/update! app :selection nil)
                               (update-frames app erased-frames))
                             (get-progress-cb app))))

(defmethod perform-action :crop [{crop-spec :arg} owner app]
  (let [props @(om/get-props owner)
        {frames :frames frame-width :frame-width frame-height :frame-height} props]
    (crop-tool/crop-frames frames frame-width frame-height crop-spec
                           (fn [cropped-frames _]
                             (om/update! app :selection nil) 
                             (update-frames app cropped-frames (:w crop-spec) (:h crop-spec)))
                           (get-progress-cb app))))

(defmethod perform-action :scale [{scale :arg} owner app]
  (let [props @(om/get-props owner)
        {frames :frames frame-width :frame-width frame-height :frame-height} props]
    (scale-tool/scale-frames frames frame-width frame-height scale
                             (fn [scaled-frames]
                               (update-frames app scaled-frames (* frame-width scale) (* frame-height scale)))
                             (get-progress-cb app))))

(defn client-root [{:keys [current-file-name frames frame-width frame-height load-progress current-frame-index action-chan selection] :as app} owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (go (loop []
            (let [action (<! action-chan)]
              (perform-action action owner app))
            (recur))))

    om/IWillUpdate
    (will-update [_ {:keys [playing] :as next-props} _]
      (when playing
        (if (>= current-frame-index (- (.-length frames) 2))
          (do
            (om/update! app :current-frame-index 0)
            (om/update! app :playing false))
          (om/transact! app :current-frame-index inc))))

    om/IRender
    (render [_]
      (if-not current-file-name
        (om/build intro-view/cmp app)
        (html [:div {:class "main-interface-container"}
               [:div.row.full-width
                [:div.small-3.column.current-file
                 [:span.logo-small]
                 current-file-name]
                [:div.small-9.column.progress-column
                 (om/build progress-bar/cmp app)]]

               (when frames
                 [:div { :class "canvas-container"
                        :style #js {:height frame-height}}

                  (om/build canvas-view/cmp app)
                  (om/build rectangle-selection/cmp app)])
               
               (when frames [:div.controls-container
                             (om/build canvas-controls/cmp app)])
               (when frames (om/build tab-view/cmp app
                                      {:state {:cmps [
                                                      {:title "crop" :active true :cmp (om/build crop-view/cmp app)}
                                                      {:title "scale" :cmp [:div
                                                                            (om/build scale-up-view/cmp app)
                                                                            (om/build scale-down-view/cmp app)]}
                                                      {:title "erase" :cmp (om/build erase-view/cmp app)}
                                                      {:title "trim" :cmp (om/build trim-view/cmp app)}
                                                      {:title "color swap" :cmp (om/build swap-view/cmp app)}
                                                      {:title "stabilize" :cmp [:div "soon!"]}
                                                      {:title "export" :cmp (om/build export-view/cmp app)}
                                                      ]}}))])))))

(om/root client-root app-state {:target (.getElementById js/document "client-target")})
