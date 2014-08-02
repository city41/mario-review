(ns daisy.client.components.trim-view
  (:require [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [cljs.core.async :refer [put!]]))

(defn cmp [app owner]
  (reify
    om/IRender
    (render [_]
      (html [:div (str "number of frames: " (alength (:frames app)))
             [:div "trims frames inclusively (ie 3-7 will trim 3, 4, 5, 6 *and* 7)"]
             [:input {:type "text" :placeholder "from" :ref "from"}]
             [:input {:type "text" :placeholder "to" :ref "to"}]
             [:button {:on-click (fn [e]
                                   (let [from (om/get-node owner "from")
                                         to (om/get-node owner "to")
                                         from-v (js/Number (.-value from))
                                         to-v (js/Number (.-value to))]
                                     (put! (:action-chan @app) {:op :trim :arg {:from (dec from-v) :to to-v}})))}
               "trim frames"]]))))

