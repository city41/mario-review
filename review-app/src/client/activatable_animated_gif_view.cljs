(ns mario.activatable-animated-gif-view
  (:require [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]))



(defn cmp [{:keys [video-src active width height]} owner]
  (reify
    om/IDisplayName
    (display-name [_] "activatable-animated-gif-view")

    om/IRender
    (render [_]
      (html [:div "GIF PLEASE"]))))
