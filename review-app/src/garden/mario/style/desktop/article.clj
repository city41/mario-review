(ns mario.style.desktop.article
  (:require [mario.style.desktop.variables :as v]
            [mario.style.desktop.media-util :refer [phone]]
            [garden.def :refer [defstyles defkeyframes]]
            [garden.units :refer [px percent s em]]))

(defkeyframes fadein
  [:from
   {:opacity 0}]

  [:to
   {:opacity 1}])

(def h1-images ["pipe"
                "yoshi-house"
                "mushroom"
                "question-block"
                "green-switch"
                "galoomba"
                "jump-block"
                "ghost-house"
                "yoshi"
                "wendy"
                "pumpkin-plant"])

(defn get-h1 [img]
  [(str "&." img) {:background-image (str "url(../img/" img ".png)")}])

(defn get-h1s-with-images []
  (map get-h1 h1-images))

(defn export []
  [[:* :*:before :*:after
    ^:prefix {:box-sizing "border-box"}]

   [:html :body
    {:margin 0
     :padding 0
     :height (percent 100)
     :width (percent 100)
     :font-family "sans-serif"}]

    [:#background-hook
     {:position "fixed"
      :top 0
      :left 0
      :bottom 0
      :right 0
      :background-image "url(../img/first-level-bg.png)"
      :background-size "cover"
      :z-index -1
      :opacity 0.3}
     ^:prefix {:transform "scale(1.2)"
               :filter "blur(8px)"}]

   [:button:focus :button:active :a:focus :a:active
    {:outline "none !important"}]

   [:.center
    {:text-align "center"
     :width (percent 100)}]

   [:.clickable
    {:cursor "pointer"}]

   [:.embed-left
    {:float "left"
     :margin-right (px 15)}]

   [:article.review
    {:width (px 730)
     :padding [[(px 20) (px 60)]]
     :margin [[(px 40) 0 (px 100) (px 80)]]
     :background-color (:main-bg v/colors)
     :border [[(px 4) "solid" (:cmp-contrast v/colors)]]}
    [:section
     {:line-height (px 21)
      :margin-top (px 20)}]
    [:h1
     {:background-color (:cmp-contrast v/colors)
      :color (:main-bg v/colors)
      :padding [[(px 2) (px 60) (px 2) (px 110)]]
      :margin [[(px 60) 0 0 (px -60)]]
      :display "block"
      :background-repeat "no-repeat"
      :background-position [[(px 60) (percent 50)]]
      :font-size (em 1.8)
      :width "calc(100% + 120px)"
      :height (px 60)
      :line-height (px 60)}
     (get-h1s-with-images)
     [:&.wendy {:background-position [[(px 35) (percent 50)]]}]
     [:&.yoshi {:background-position [[(px 35) (percent 50)]]}]]
    [:h2
     {:font-size (em 1.2)}]
    [:p
     {:margin-bottom (px 20)}]
    [:.game-title
     {:float "left"}]
    [:.game-stats
     {:float "right"}]
    [:.game-stat
     {:margin [[(px 8) (px -60) (px 8) 0]]
      :padding [[(px 3) (px 15)]]
      :background-color (:cmp-contrast v/colors)
      :color (:main-bg v/colors)
      :font-size (em 0.75)
      :font-weight 100}
     [:&:first-child
      {:margin-top (px 20)}]]
    [:.dev-stat
     {:margin-top (px 20)
      :background-color (:twitter v/colors)
      :color (:main-bg v/colors)}
     [:a
      {:margin [[0 (px 10) 0 (px 6)]]
       :color (:main-bg v/colors)
       :text-decoration "none"}]]]

   (phone
    [:body
     {:overflow-x "hidden"}]
    [:#background-hook
     {:background-image "none"}]
    [:article.review
     {:width (percent 100)
      :margin 0
      :padding (px 10)}
     [:h1 {:width "calc(100% + 20px)"
           :white-space "nowrap"
           :overflow-x "hidden"
           :margin [[(px 40) 0 0 (px -10)]]}]
     [:img {:max-width (px 290)
            :height "auto"}]])

   [:.caption
    {:padding (px 8)
     :font-style "italic"
     :font-size (em 0.75)
     :line-height (em 1)
     :color (:caption v/colors)}]

   [:.clear
    {:clear "both"}]

   [:.clearfix:after
    {:visibility "hidden"
     :content "\"\""
     :clear "both"
     :height 0
     :font-size 0
     :display "block"}]

   fadein
   
   [:#main-content
    {:display "none"}
    [:&.fade-in
     {:display "block"}
     ^:prefix {:animation [[fadein (s 3)]]}]]

   [:#welcome-vid-container
    {:width (percent 100)
     :text-align "center"
     :margin-bottom (px 60)}]

   [:.callout
    {:background-color (:cmp-contrast-faded v/colors)
     :padding (px 3)
     :border [[(px 1) "solid" (:cmp-contrast-faded v/colors)]]
     :margin-bottom (px 10)}]

   [:.callout-left
    {:float "left"
     :margin-right (px 20)}]

   [:.callout-right
    {:float "right"
     :margin-left (px 20)}]

   [:.callout-inline
    {:padding (px 10)
     :font-size (em 0.8)
     :line-height (em 1.2)
     :margin [[(px 10) 0]]
     :border-radius (px 5)
     :border 0}]

   [:.music-callout-header
    {:float "left"}]

   [:.music-callout-body
    {:float "left"
     :margin-left (px 10)
     :width "calc(100% - 150px)"}]

   [:.autumn-enemies
    {:width (percent 100)
     :margin [[(px 40) 0]]}
    [:td
     {:width (percent 50)
      :padding [[(px 10) 0]]
      :text-align "center"}]]])
