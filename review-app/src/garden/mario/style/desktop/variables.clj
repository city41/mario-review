(ns mario.style.desktop.variables
  (:require [garden.def :refer [defstyles]]
            [garden.units :refer [px]]
            [garden.color :refer [rgb rgba]]))

;; COLORS
(def colors {:main-bg "white"
             :cmp-main (rgb 190 27 68)
             :cmp-main-faded (rgb 237 140 164)
             :cmp-contrast (rgb 237 134 57)
             :cmp-contrast-faded (rgba 237 134 57 0.4)
             :grey (rgb 153 153 153)
             :light-grey (rgb 170 170 170)
             :caption (rgb 51 51 51)
             :twitter (rgb 0 87 255)})

(def cmp-border-radius-val (px 6))
(def cmp-border-radius cmp-border-radius-val)
(def cmp-box-shadow [[(px 6) (px 6) (px 8) (px 1) (:grey colors)]])
