(ns daisy.client.components.tab-view
  (:require [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]))

(defn update-active [cmp active-cmp]
  (if (= cmp active-cmp)
    (assoc cmp :active true)
    (dissoc cmp :active)))

(defn set-active [cmp owner]
  (let [cmps (om/get-state owner :cmps)
        updated (map #(update-active % cmp) cmps)]
    (om/set-state! owner :cmps updated)))

(defn build-tab [cmp owner]
  (if (:active cmp)
    [:li.tab-title.active [:a {:on-click #(set-active cmp owner) } (:title cmp)]]
    [:li.tab-title        [:a {:on-click #(set-active cmp owner) } (:title cmp)]]))

(defn cmp [app owner]
  (reify
    om/IRenderState
    (render-state [_ {:keys [cmps extra] :as state}]
      (let [active-cmp (:cmp (first (filter :active cmps)))]
        (html [:div
               [:ul.tabs (map #(build-tab % owner) cmps)
                (when extra [:li.tab-title.extra extra])]
               [:div.tabs-content active-cmp]])))))
