(ns mario.activatable-video-view
  (:require [cljs.core.async :as async :refer [<!]]
            [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [mario.activatable-animated-gif-view :as agif]
            [mario.activatable-html5-video-view :as avideo]
            [mario.util :as util]
            [mario.scroll-activate-root :as scroll-activate-root]))

(defn get-img-attrs [src w h]
  (let [attrs {:key src
               :src (str src ".gif")}]
    (if (and w h)
      (assoc attrs :width w :height h)
      attrs)))

(defn cmp [{:keys [video-src active width height] :as app} owner]
  (reify
    om/IDisplayName
    (display-name [_] "activatable-video-view::cmp")
    
    om/IRender
    (render [_]
      (html [:div.activatable-video-view 
             [:div.activatable-video-container 
              (if (util/must-use-gifs)
                (om/build agif/cmp app)
                (om/build avideo/cmp app))]]))))

(def root (scroll-activate-root/get-root cmp))
