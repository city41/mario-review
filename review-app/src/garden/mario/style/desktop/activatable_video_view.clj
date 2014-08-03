(ns mario.style.desktop.activatable-video-view
  (:require [mario.style.desktop.variables :as v]
            [garden.def :refer [defstyles]]
            [garden.color :refer [rgba]]
            [garden.units :refer [px em]]))

(defn export []
  [[:.activatable-video-container
     {:position "relative"
      :display "table"
      :margin "0 auto"}]
   [:.replay
    {:position "absolute"
     :left 0
     :bottom 0
     :color (:light-grey v/colors)
     :border-width (px 1)
     :border-style "solid"
     :border-color (:light-grey v/colors)
     :background-color (rgba 255 255 255 0.9)
     :font-size (em 1.4)
     :padding (px 6)}
    [:&:hover
     {:background-color (:light-grey v/colors)
      :color (rgba 255 255 255 0.9)}]]])

