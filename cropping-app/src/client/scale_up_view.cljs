(ns daisy.client.components.scale-up-view
  (:require [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [cljs.core.async :refer [put!]]))

(defn cmp [app owner]
  (reify
    om/IRender
    (render [_]
      (html [:button {:on-click (fn [e] (put! (:action-chan @app) {:op :scale :arg 2}))}
             "scale up"]))))
