(ns mario.gif-warning
  (:require [goog.dom.classes :as gclasses]
            [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]))

(defn user-should-see-warning []
  (.mustUseGifs js/window))

(defn reveal [owner target-id kick-off-vid-id]
  (let [target (.getElementById js/document "main-content")]
    (om/set-state! owner :show-warning false)
    (gclasses/add target "fade-in")))

(defn get-display [show-warning]
  (if show-warning "" "none"))

(defn cmp [app owner]
  (reify
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
              [:p "This review will use a ton of bandwidth on phones and tablets. It has 52 animated gifs!"]
              [:p "You're better off using a desktop machine if you can"]]
             [:div.gif-warning-button-container
              [:button {:on-click #(reveal owner)} "Show Me Anyway"]]]))))
