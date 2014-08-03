(ns mario.activatable-video-view
  (:require [cljs.core.async :as async :refer [<!]]
            [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [mario.scroll-activate-root :as scroll-activate-root]))

(defn get-video [owner]
  (try (om/get-node owner "video")
       (catch js/Object e nil)))

(defn play-video
  ([owner]
     (play-video owner false))
  ([owner should-load]
     (try
       (when-let [v (get-video owner)]
         (set! (.-currentTime v) 0)
         (when should-load (.load v))
         (.play v))
       ;; Om blows up when there is no video ref
       (catch js/Object e))))

(defn get-video-attrs [active video-src width height]
  (let [attrs {:ref "video" :key video-src}
        attrs (if active
                (assoc attrs :autoPlay "autoplay")
                attrs)
        attrs (if (and width height)
                (assoc attrs :width width :height height)
                attrs)]
    attrs))

(defn get-video-sources [src-root]
  (let [get-source (fn [ext] [:source {:src (str src-root "." ext) :type (str "video/" ext)}])
        exts ["mp4" "webm"]]
    (map get-source exts)))


(defn get-img-attrs [src w h]
  (let [attrs {:key src
               :src (str src ".gif")}]
    (if (and w h)
      (assoc attrs :width w :height h)
      attrs)))

(defn hook [owner]
  (when-let [v (get-video owner)]
    (.addEventListener v "ended" #(om/set-state! owner :played-once true))))

(defn cmp [{:keys [video-src active width height]} owner]
  (reify
    om/IInitState
    (init-state [_]
      {:played-once false})

    om/IDidMount
    (did-mount [_]
      (hook owner))
    
    om/IWillUpdate
    (will-update [_ {:keys [video-src active]} _]
      (let [prev-active (:active (om/get-props owner))
            prev-src (:video-src (om/get-props owner))]
        (when (not= prev-src video-src)
          (om/set-state! owner :played-once false)
          (.setTimeout js/window #(hook owner) 5))
        (when (and (not prev-active) active)
          (play-video owner))))

    
    om/IRenderState
    (render-state [_ {:keys [played-once] :as state}]
      (html [:div.activatable-video-view 
             [:div.activatable-video-container {:ref "container"}
              (if (.mustUseGifs js/window)
                [:img (get-img-attrs video-src width height)]
                [:video (get-video-attrs active video-src width height) (get-video-sources video-src)])
               (when played-once [:div.replay.clickable {:on-click #(play-video owner true)}
                                  [:i.fa.fa-repeat]])]]))))

(def root (scroll-activate-root/get-root cmp))
