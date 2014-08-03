(ns mario.style.desktop.media-util
  (:require [mario.style.desktop.variables :as v]
            [garden.def :refer [defstyles defkeyframes]]
            [garden.stylesheet :refer [at-media]]
            [garden.units :refer [px percent s em]]))

(defn phone [& args]
  (apply at-media {:max-width (px 768)} args))

(defn phone-vertical [& args]
  (apply at-media {:max-width (px 320)} args))

(defn export []
  [[:.show-xsv
    {:display "none"}]
   (phone-vertical
    [:.show-xsv
     {:display "block"}])
   (phone-vertical
    [:.hidden-xsv
     {:display "none"}])
   (phone
    [:.show-xsv
     {:display "none"}])
   (phone
    [:.hidden-xs
     {:display "none"}])])
