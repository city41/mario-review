(ns mario.spoiler-warning
  (:require [goog.dom.classes :as gclasses]
            [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]))

(def KEY "smw-seen-spoiler-warning")

(defn remember []
  (let [ls js/localStorage]
    (when ls
      (.setItem ls KEY "true"))))

(defn user-has-seen-warning []
  (let [ls js/localStorage]
    (and
     (not (nil? ls))
     (not (nil? (.getItem ls KEY))))))

(defn reveal [owner target-id kick-off-vid-id]
  (let [target (.getElementById js/document target-id)]
    (om/set-state! owner :hide true)
    (remember)
    (gclasses/add target "fade-in")))

(defn get-display [hide]
  (if hide "none" ""))

(defn mobile-warning []
  [:div.spoiler-warning-text
   [:h2 "Phone Warning!"]
   "This review has 48 large videos. They will use a lot of bandwidth. You'll get a better experience on a desktop computer :-/"])

(defn cmp [app owner]
  (reify
    om/IInitState
    (init-state [_]
      {:hide false})

    om/IDidMount
    (did-mount [_]
      (when (user-has-seen-warning)
        (reveal owner "spoiler-content" "welcome-vid")))
    
    om/IRenderState
    (render-state [_ {:keys [hide]}]
      (html [:div.spoiler-warning {:style #js {:display (get-display hide)}}
             (when (.mustUseGifs js/window) (mobile-warning))
             [:div.spoiler-warning-text
              [:h2 "Hey!"]
              "This article has spoilers galore. If you've never played "
              [:i "Super Mario World"]
              ", then go play it and come back. Otherwise, let's get started!"]
             [:div.spoiler-warning-button-container
              [:button {:on-click #(reveal owner "spoiler-content" "welcome-vid")} "OK"]]]))))
