(ns mario.style.desktop.hud-explorer
  (:require [mario.style.desktop.variables :as v]
            [garden.def :refer [defstyles defkeyframes]]
            [garden.units :refer [px percent s em]]))

(defn export []
  [[:.hud-explorer
    {:position "relative"
     :background-color (:cmp-main v/colors)
     :color (:main-bg v/colors)
     :padding (px 20)}
    ^:prefix {:box-shadow v/cmp-box-shadow}]

   [:.hud-explorer-closed
    {:text-align "center"
     :padding-top (px 20)}]

   [:.hud-explorer-img-container
    {:position "relative"
     :width (px 516)
     :height (px 98)
     :margin [[0 "auto"]]
     :border [[(px 2) "solid" (:main-bg v/colors)]]}
    [:img
     {:position "absolute"
      :z-index 50}]
    [:canvas
     {:position "absolute"
      :z-index 100}]]

   [:.hud-explorer-entry
    {:padding-left (px 30)
     :margin-top (px 5)
     :width (percent 100)}
    [:&:hover
     {:color (:cmp-main v/colors)
      :background-color (:main-bg v/colors)}]
    ["&:nth-of-type(1)"
     {:margin-top (px 20)}]]

   [:.hud-explorer-entry-name
    {:display "inline-block"
     :font-weight "bold"
     :font-size (em 1.2)
     :margin-right (px 10)}]

   [:.hud-explorer-entry-description
    {:color (:cmp-main v/colors)
     :display "inline-block"
     :font-size (em 0.9)}]

   [:.hud-explorer-toggle-tray
    {:text-align "center";
     :font-size (em 1.4)
     :width "calc(100% + 40px)"
     :background-color (:cmp-contrast v/colors)
     :color (:main-bg v/colors)
     :margin [[(px 20) (px -20) (px -20) (px -20)]]}]])
