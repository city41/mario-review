(ns mario.style.desktop.video-to-image
  (:require [mario.style.desktop.variables :as v]
            [mario.style.desktop.media-util :refer [phone]]
            [garden.def :refer [defstyles defkeyframes]]
            [garden.units :refer [px s]]))

(defkeyframes fadeout
     [:0%
      {:opacity 1}]
     [:100%
      {:opacity 0}])

(defn export []
  [[:.video-to-image-container
    {:position "relative"
     :height (px 164)}]
   [:.video-to-image-img
    {:position "absolute"
     :z-index 50}]
   [:.video-to-image-video
    {:position "absolute"
     :z-index 100}
    [:&.fade-out
     ^:prefix {:animation [["fadeout" (s 1)]]}
     {:opacity 0}]]
   fadeout

   (phone
    [:.video-to-image-container
     {:height "auto"}])])
