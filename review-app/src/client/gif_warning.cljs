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
              [:p "This review uses a ton of bandwidth on phones and tablets. It has 53 animated gifs!"]
              [:p "It's been known to crash some mobile browsers too ..."]
              [:p "You're better off using a desktop machine if you can"]]
             [:div.gif-warning-button-container
              [:button {:on-click #(reveal owner)} "I'm Going In!"]]]))))
