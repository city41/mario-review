(ns daisy.client.components.erase-view
  (:require [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [cljs.core.async :refer [put!]]))

(defn cmp [app owner]
  (reify
    om/IRender
    (render [_]
      (html [:div.erase-view
             [:div.row.full-width
              [:div.large-offset-1.large-9.column
               (if-not (:selection app)

                 "Drag a region on the video to erase"

                 [:button {:disabled (nil? (:selection app))
                         :onClick (fn [e] (put! (:action-chan @app)  {:op :erase :arg (:selection @app)}))}
                 "erase"]   )]]]))))
