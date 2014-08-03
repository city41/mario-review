(ns mario.level-explorer
  (:require [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [mario.activatable-video-view :as avideo]))

(defn build-open-header [owner levels]
  (let [click-fn (fn [] (om/set-state! owner :open true))]
    [:div.entity-explorer.level-explorer.clickable {:on-click click-fn}
     [:div.thumbnail-container
      (map (fn [l] [:img.entity-explorer-header {:src (:thumb-src l)}]) (take 4 levels))
      [:div " ... click to explore more levels"]]
     [:div.clickable.hud-explorer-toggle-tray.clear
      [:i.fa.fa-caret-down]]]))

(defn build-row [index {:keys [thumb-src name description]} owner]
  (let [click-fn (fn [] (om/set-state! owner :active-index index))]
    [:div.level-explorer-entry {:on-click click-fn}
     [:img {:src thumb-src}]
     [:div.level-explorer-closed-description
      [:h2 name]
      [:div description]]]))

(defn build-rows
  ([levels owner offset]
     (map-indexed #(build-row (+ offset %1) %2 owner) levels))
  ([levels owner]
     (build-rows levels owner 0)))

(defn build-active-level [owner {:keys [level video-src name description]}]
  [:div.level-explorer-active-level.clearfix 
   [:div.level-explorer-active-level-video
    (om/build avideo/cmp {:video-src video-src :active true :width 256 :height 224})]
   [:div.level-explorer-active-level-body 
    [:h2 name]
    [:div description]]])

(defn build-instruction-header []
  [:div.level-explorer-instructions "Click on a level to see it in action"])

(defn build-body [owner active-index levels]
  (let [upper-levels (take active-index levels)
        active-level (when active-index (get levels active-index))
        lower-levels (if active-index (drop (inc active-index) levels) levels)
        click-fn (fn [] (om/set-state! owner :open false))]
    [:div.entity-explorer.level-explorer
     (build-instruction-header)
     (build-rows upper-levels owner)
     (when active-level (build-active-level owner active-level))
     (build-rows lower-levels owner (inc (or active-index -1)))
     [:div.clickable.hud-explorer-toggle-tray.clear {:on-click click-fn}
      [:i.fa.fa-caret-up]]]))

(defn cmp [{:keys [levels]} owner]
  (reify
    om/IDisplayName
    (display-name [_] "level-explorer::cmp")
    
    om/IInitState
    (init-state [_]
      {:active-index nil
       :open false})
    
    om/IRenderState
    (render-state [_ {:keys [active-index open]}]
      (html (if open
              (build-body owner active-index levels)
              (build-open-header owner levels))))))
