(ns daisy.client.components.progress-bar
  (:require [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]))

(defn get-display [lp]
  ""
  #_(if (or (= lp 0) (>= lp 1)) "none" ""))

(defn cmp [{:keys [load-progress] :as app} owner]
  (reify
    om/IRender
    (render [_]
      (let [percent (str "" (* 100 load-progress) "%")]
        (html [:div.progress {:style #js {:display (get-display load-progress)}}
               [:span.meter {:style #js {:width percent}}]])))))
