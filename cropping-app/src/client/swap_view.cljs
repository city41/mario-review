(ns daisy.client.components.swap-view
  (:require [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [cljs.core.async :refer [put!]]))

(defn cmp [app owner]
  (reify
    om/IRender
    (render [_]
      (html [:div.swap-view
             [:div.row.full-width
              [:div.large-offset-1.large-9.column
               [:button {:onClick (fn [e] (put! (:action-chan @app)  {:op :swap}))}
                 "swap"]]]]))))
