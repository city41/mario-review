(ns mario.entity-explorer
  (:require [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [mario.activatable-video-view :as avideo]))

(defn entity-img-attrs [thumb hover-thumb]
  (let [a {:src thumb}]
    (if hover-thumb
      (assoc a
        :on-mouse-over #(set! (.. % -target -src) hover-thumb)
        :on-mouse-out #(set! (.. % -target -src) thumb))
      a)))

(defn entity-div [owner active-index entity-index {:keys [thumb hover-thumb flipped] :as entity}]
  (let [active (= active-index entity-index)
        click-fn (fn [] (om/set-state! owner :active-index entity-index))]
    [:div.entity-explorer-entry {:class (str "" (when active " active-entity") (when flipped " flipped"))
                                 :on-click click-fn
                                 :on-touch-end click-fn}
     [:img (entity-img-attrs thumb hover-thumb)]]))

(defn build-entities
  ([owner entities active offset]
     (map-indexed #(entity-div owner active (+ offset %1) %2) entities))
  ([owner entities active]
     (build-entities owner entities active 0)))

(defn build-main [entity]
  [:div
   (om/build avideo/cmp (assoc entity :active true))
   [:h1 (:name entity)]
   [:div.entity-explorer-main-description (:description entity)]])

(defn build-instructions [type-name]
  [:div.entity-explorer-instructions (str "Click on an " type-name " to learn more about them")])

(defn build-open-header [owner entities plural-type-name]
  (let [click-fn (fn [] (om/set-state! owner :open true))]
    [:div.entity-explorer.clickable {:on-click click-fn
                                     :on-touch-end click-fn}
     (map (fn [e] [:img.entity-explorer-header {:src (:thumb e)}]) (take 4 entities))
     (str " click to explore more " plural-type-name)
     [:div.clickable.hud-explorer-toggle-tray
      [:i.fa.fa-caret-down]]]))

(defn build-body [owner entities active-index type-name plural-type-name]
  (let [total-entities (count entities)
        half (/ total-entities 2)
        active-entity (when active-index (get entities active-index))
        left-entities (take half entities)
        right-entities (drop half entities)
        offset (.ceil js/Math half)
        click-fn (fn [] (om/set-state! owner :open false))]
    [:div.entity-explorer.clearfix
     [:div.entity-explorer-column.entity-explorer-column-left (build-entities owner left-entities active-index)]
     [:div.entity-explorer-main-area (if active-entity (build-main active-entity) (build-instructions type-name))]
     [:div.entity-explorer-column.entity-explorer-column-right.hidden-xsv (build-entities owner right-entities active-index offset)]
     [:div.show-xsv.rotate-tip (str "rotate your phone to see more " plural-type-name)]
     [:div.clickable.hud-explorer-toggle-tray.clear {:on-click click-fn
                                                     :on-touch-end click-fn}
      [:i.fa.fa-caret-up]]]))

(defn cmp [{:keys [entities type-name plural]} owner]
  (reify
    om/IInitState
    (init-state [_]
      {:active-index 0
       :open false})

    om/IRenderState
    (render-state [_ {:keys [active-index open]}]
      (html (if open
              (build-body owner entities active-index type-name plural)
              (build-open-header owner entities plural))))))
