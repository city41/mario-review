(ns mario.style.desktop.activatable-video-view
  (:require [mario.style.desktop.variables :as v]
            [garden.def :refer [defstyles]]
            [garden.color :refer [rgba]]
            [garden.units :refer [px]]))

(defn export []
  [[:.activatable-video-container
     {:position "relative"
      :display "table"
      :margin "0 auto"}]
   [:.replay
    {:position "absolute"
     :left (px -1)
     :bottom (px -1)
     :color (:light-grey v/colors)
     :background-color (rgba 255 255 255 0.9)
     :border-radius (px 3)
     :padding (px 3)}]])
