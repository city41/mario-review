(ns mario.video-to-image
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [goog.events :as events]
            [cljs.core.async :as async :refer [>! <! put! chan]]
            [om.core :as om :include-macros true]
            [mario.activatable-video-view :as avideo]
            [mario.util :as util]
            [sablono.core :as html :refer-macros [html]])
  (:import [goog.events EventType]))

(defn img-cmp [{:keys [img-src]} owner]
  (reify
    om/IDisplayName
    (display-name [_] "video_to_image::img-cmp")
    
    om/IRender
    (render [_]
      (html [:div.video-to-image-container
             [:img {:src img-src}]]))))

(defn video-cmp [{:keys [video-src img-src width height transition pre-delay post-delay]} owner]
  (reify
    om/IDisplayName
    (display-name [_] "video-to-image::video-cmp")
    
    om/IInitState
    (init-state [_]
      {:transition false})

    om/IDidMount
    (did-mount [_]
      (let [v (om/get-node owner "video")]
        (.addEventListener v "ended" (fn [] (js/setTimeout #(om/set-state! owner :transition true) post-delay)))
        (js/setTimeout #(.play v) pre-delay)))

    om/IRenderState
    (render-state [_ {:keys [transition]}]
      (html [:div.video-to-image-container
             [:div.video-to-image-video {:class (str "" (when transition " fade-out"))}
              [:video {:key video-src
                       :width width
                       :height height
                       :ref "video"} (avideo/get-video-sources video-src)]]
             [:div.video-to-image-img 
              [:img {:src img-src
                     :width width
                     :height height}]]]))))

(defn root [app owner]
  (reify
    om/IDisplayName
    (display-name [_] "video_to_image::root")
    
    om/IRender
    (render [_]
      (let [cmp (if (util/must-use-gifs) img-cmp video-cmp)]
           (om/build cmp app)))))
