(ns mario.style.desktop.spoiler-warning
  (:require [mario.style.desktop.variables :as v]
            [garden.def :refer [defstyles defkeyframes]]
            [garden.units :refer [px percent s em]]))
(defkeyframes mario-agitate
     [:0%
      {:background-position [[(px 15) (percent 50)]]}]
     [:25%
      {:background-position [[(px 25) (percent 50)]]}]
     [:50%
      {:background-position [[(px 25) (percent 50)]]}]
     [:75%
      {:background-position [[(px 15) (percent 50)]]}]
     [:100%
      {:background-position [[(px 15) (percent 50)]]}])

(defn export []
  [[:.spoiler-warning
    {:margin [[(px 30) 0 (px 10) 0]]
     :background-image "url(../img/mario-die.png)"
     :background-repeat "no-repeat"
     :background-position [[(px 20) (percent 50)]]
     :background-color (:cmp-main v/colors)
     :color (:main-bg v/colors)
     :padding (px 15)
     :border-radius (px 10)}
    ^:prefix {:box-shadow v/cmp-box-shadow
              :animation [["mario-agitate" (s 2) "infinite"]]}
    [:&.fade-out
     ^:prefix {:animation [["fadeout" (s 1)]]}]
    [:&.fade-out-done
     {:display "none"}]]

   [:.spoiler-warning-text
    {:margin-left (px 90)
     :margin-bottom (px 20)
     :line-height (px 22)}
    [:h2
     {:margin [[0 0 (px 10) 0]]
      :padding 0}]]

   [:.spoiler-warning-button-container
    {:margin-top (px 20)
     :text-align "center"}
    [:button
     {:padding (px 10)
      :border-radius 0
      :background-color (:cmp-main v/colors)
      :color (:main-bg v/colors)
      :border [[(px 1) "solid" (:main-bg v/colors)]]
      :font-size (em 1.2)
      :font-weight "bold"}
     [:&:hover
      {:color (:cmp-main v/colors)
       :background-color (:main-bg v/colors)
       :border [[(px 1) "solid" (:cmp-main v/colors)]]}]
     [:&:active
      {:outline "none"}]
     [:&:focus
      {:outline "none"}]]]
   
   mario-agitate])
