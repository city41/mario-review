(ns mario.style.desktop.gif-warning
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
  [[:.gif-warning
    {:margin 0
     :background-image "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABgCAYAAACtxXToAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3gYRFCI4F5rntwAAApdJREFUeNrtXKFyg0AQLZ0KZGRERSQynxAZURF5EolERCAjERXISCQyoiIynxCJjIhAVp5L9e7N3HZnIdMObx3hOC5v7r17u3Ak/n56mTLc++5hub67n5Ipx/f6MvMAAHMH4G1qjnebkv5wFDoslP0bNQIUAADQABvnA47zONf0+Fap2ndb5XiUmgAKAICZRyLlAlrOn4dvcrzrW9MAT1lOjrfLRXy8l0blE0ABAAAfYIuUcW7sCDSkp4de8iGYAQAAAIyqAVNz3jqeHWYAAAAAo+YCUm7Ar+brMueotG5L7SXOox4ACgCAcTUgFeryVi8+dS7iUQ8ABQCAKRfgHEq1z/vX3jbCa6pq7uEDQAEAMKoGWDmfNvSFAF8W8ftJ7QVN4OOFDwAFAIBOA5p9QTl0vVCOrTeqdZ5fL67juaM/tF38fpf4/Zq9I/+n/DwmmAEAAAD83geIPoGv20rOi8E0IdAgzAAAAACm1QC+DgvrPOeo5P2tGhNogjBe7nNAAQAw8xCfC3DOlFU36bqsjcD719Q3lO2Nns9XmAEAAAAo6gHBecYxrfd3gmZ0yv4kzmMGAAAAEPcBtVs+VBza0j0/zTLuvblvOLs23n2XRzke9D/Ez/PxoSYICgAAXT0gTePP4lZrus+vyOLv7Eh7fqQ49vSdpHIxUJ+BPUOgAAAw1QNS4zc/vPfR/Jv7AjHXOMTrFa2juUP/leEdIQAAAEb0AdaQanJS+8BH1C1mAAAAAH/YB/DcYLXTef9zlZtyk8CXIBcABQDAU30A9+LZR6/SlOxE8/nbldYga7eM+4iDi2oa1wRQAADABxj3DY78zU9+P875qhtM/UMDQAEAoNOAZ4c1F0EuAAoAgP+tAc/2IaAAAJh5/AD+EQjirf44XAAAAABJRU5ErkJggg==)"
     :background-repeat "no-repeat"
     :background-position [[(px 20) (percent 50)]]
     :background-color (:cmp-main v/colors)
     :color (:main-bg v/colors)
     :padding (px 15)}
    ^:prefix {:box-shadow v/cmp-box-shadow
              :animation [["mario-agitate" (s 2) "infinite"]]}
    [:&.fade-out
     ^:prefix {:animation [["fadeout" (s 1)]]}]
    [:&.fade-out-done
     {:display "none"}]]

   [:.gif-warning-text
    {:margin-left (px 90)
     :margin-bottom (px 20)
     :line-height (px 22)}
    [:h2
     {:margin [[0 0 (px 10) 0]]
      :padding 0}]]

   [:.gif-warning-button-container
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
