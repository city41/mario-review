(ns mario.style.desktop.music-player
  (:require [mario.style.desktop.variables :as v]
            [mario.style.desktop.media-util :refer [phone]]
            [garden.stylesheet :refer [at-media]]
            [garden.def :refer [defstyles defkeyframes]]
            [garden.units :refer [px percent s em]]))


(defn export []
  [[:.music-player-controls
    {:position "fixed"
     :left (px 20)
     :bottom 0
     :width (px 350)
     :display "inline-block"
     :padding (px 5)
     :border-bottom 0
     :background-color (:cmp-main v/colors)
     :z-index 999999}]

   (phone
    [:.music-player-controls
     {:left 0
      :right 0}])

   [:.music-player-current-title
    {:color (:main-bg v/colors)
     :font-size (em 0.7)
     :padding (px 2)
     :margin-top (px 5)}]

   [:.music-player-song-entry
    {:display "inline-block"
     :padding (px 5)
     :float "left"}
    [:&.active-song
     {:background-color (:cmp-main-faded v/colors)}]]

   [:.music-player-toggle-button
    {:float "left"
     :width (px 20)
     :height (px 20)
     :background-color (:cmp-contrast v/colors)
     :color (:main-bg v/colors)
     :font-size (em 0.8)
     :border 0
     :padding 0
     :margin [[(px -5) (px 5) 0 (px -5)]]
     :cursor "pointer"}]])
