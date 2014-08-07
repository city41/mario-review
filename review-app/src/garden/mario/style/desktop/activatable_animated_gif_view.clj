(ns mario.style.desktop.activatable-animated-gif-view
  (:require [mario.style.desktop.variables :as v]
            [mario.style.desktop.media-util :refer [phone]]
            [garden.def :refer [defstyles]]
            [garden.color :refer [rgba]]
            [garden.units :refer [px em percent]]))

(defn export []
  [[:.activatable-animated-gif-view
    {:text-align :center}]])
