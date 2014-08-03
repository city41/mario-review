(ns mario.style.desktop.level-explorer
  (:require [mario.style.desktop.variables :as v]
            [mario.style.desktop.media-util :refer [phone]]
            [garden.def :refer [defstyles defkeyframes]]
            [garden.units :refer [px percent s em]]))


(defn export []
  [[:.level-explorer
    [:.thumbnail-container
     {:text-align "center"}
     [:img {:margin (px 4)}]]]
   [:.level-explorer-entry
    {:margin [[(px 20) 0]]
     :font-size (em 0.8)
     :line-height (em 1.2)
     :clear "both"
     :cursor "pointer"}
    [:&:hover
     {:background-color (:cmp-main-faded v/colors)}]
    [:h2
     {:margin-top (px 5)}]]

   [:.level-explorer-closed-description
    {:float "right"
     :width "calc(100% - 132px)"}]

   [:.level-explorer-instructions
    {:font-weight "bold"}]

   [:.level-explorer-active-level
    {:background-color (:main-bg v/colors)
     :color (:cmp-main v/colors)}]

   [:.level-explorer-active-level-video
    {:float "left"
     :margin-right (px 8)
     :width (px 256)}]

   [:.level-explorer-active-level-body
    [:h2
     {:margin-bottom (px 8)}]]

   (phone
    [:.level-explorer.entity-explorer
     [:.level-explorer-active-level
      {:width (px 256)}]
     [:.level-explorer-entry
      {:margin-bottom (px 15)}
      [:&:hover
       {:background-color (:cmp-main v/colors)}]
      [:.level-explorer-closed-description
       {:float "none"}]]])])
