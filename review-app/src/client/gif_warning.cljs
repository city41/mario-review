(ns mario.gif-warning
  (:require [goog.dom.classes :as gclasses]
            [mario.util :as util]
            [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]))

(defn user-should-see-warning []
  (util/must-use-gifs))

(defn reveal [owner]
  (let [target (.getElementById js/document "main-content")]
    (om/set-state! owner :show-warning false)
    (gclasses/add target "fade-in")))

(defn get-display [show-warning]
  (if show-warning "" "none"))

(defn cmp [app owner]
  (reify
    om/IDisplayName
    (display-name [_] "gif-warning::cmp")

    om/IInitState
    (init-state [_]
      {:show-warning (user-should-see-warning)})

    om/IDidMount
    (did-mount [_]
      (when-not (user-should-see-warning)
          (reveal owner)))
    
    om/IRenderState
    (render-state [_ {:keys [show-warning]}]
      (html [:div.gif-warning {:style #js {:display (get-display show-warning)}}
             [:div.gif-warning-text
              [:h2 "Hey!!"]
              [:p "You're about to experience the animated gif version of the review, probably because you're on a phone"]
              [:p "This version uses a TON of bandwidth and can load slowly, desktop computers give a better experience"]]
             [:div.gif-warning-button-container
              [:button {:on-click #(reveal owner)} "Got it"]]]))))
