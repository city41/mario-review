(ns mario.style.desktop.entity-explorer
  (:require [mario.style.desktop.variables :as v]
            [mario.style.desktop.media-util :refer [phone phone-vertical]]
            [garden.def :refer [defstyles]]
            [garden.units :refer [px percent em]]))

(defn export []
  [[:.entity-explorer
    {:margin [[(px 30) 0]]
     :background-color (:cmp-main v/colors)
     :color (:main-bg v/colors)
     :padding (px 20)}
    ^:prefix {:box-shadow v/cmp-box-shadow}
    [:.entity-explorer-main-area
     {:float "left"
      :width "calc(100% - 160px)"
      :padding (px 20)
      :background-color (:main-bg v/colors)
      :color (:cmp-main v/colors)
      :margin-bottom (px 20)}
     [:h1
      {:margin [[0 0 (px 10) 0]]
       :padding 0
       :line-height "normal"
       :background-color "transparent"
       :color (:cmp-main v/colors)}]]
    [:.entity-explorer-entry
     {:width (percent 90)
      :text-align "center"
      :margin [[(px 8) 0]]
      :padding [[(px 8) 0]]
      :cursor "pointer"}
     [:&:first-child
      {:margin 0
       :margin-bottom (px 8)}]
     [:&:last-child
      {:margin 0
       :margin-top (px 8)}]
     [:&.active-entity
      {:background-color (:main-bg v/colors)}]]
    [:.flipped
     [:img
      ^:prefix {:transform "scaleX(-1)"}]]]
   
   [:.entity-explorer-header
    {:margin [[0 (px 4)]]}]

   [:.entity-explorer-instructions
    {:text-align "center"
     :margin-top (px 100)}]

   [:.entity-explorer-column
    {:text-align "center"
     :width (px 80)
     :margin-bottom (px 20)}
    [:&.entity-explorer-column-left
     {:float "left"}]
    [:&.entity-explorer-column-right
     {:float "right"}
     [:.entity-explorer-entry
      {:margin-left (px 10)}]]]
   
   [:.rotate-tip
    {:font-style "italic"
     :font-size (em 0.9)}]

   (phone
    [:.entity-explorer
     {:margin [[0 (px -10) 0 (px -10)]]}
     [:.entity-explorer-column
      {:width "auto"}]])

   (phone-vertical
    [:.entity-explorer
     {:padding-right 0}
     [:.entity-explorer-main-area
      {:width "calc(100% - 70px)"}]
     [:.hud-explorer-toggle-tray
      {:width "calc(100% + 20px)"}]])])
