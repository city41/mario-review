(ns mario.hud-explorer
  (:require [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]))

(def hud-items [
                {:name "Lives"
                 :description "How many extra lives Mario has"
                 :rect [{:x 25 :y 20 :w 95 :h 50}]}
                {:name "Dragon Coins"
                 :description "Collect 5 Dragon Coins in one level for a 1-up"
                 :rect [{:x 122 :y 25 :w 64 :h 25}]}
                {:name "Star Count"
                 :description "Earn 100 stars at ends of levels for a bonus game"
                 :rect [{:x 186 :y 25 :w 41 :h 41} {:x 138 :y 45 :w 55 :h 21}]}
                {:name "Extra Item"
                 :description "Storage for an extra item Mario can use"
                 :rect [{:x 226 :y 15 :w 62 :h 62}]}
                {:name "Timer"
                 :description "How much time remaining to finish the level"
                 :rect [{:x 298 :y 25 :w 63 :h 43}]}
                {:name "Coins"
                 :description "How many coins Mario has collected, 100 yields a 1-up"
                 :rect [{:x 390 :y 25 :w 95 :h 23}]}
                {:name "Score"
                 :description "The all important score of the game!"
                 :rect [{:x 381 :y 46 :w 104 :h 20}]}
                ])

(defn get-ctx [owner]
  (.getContext (om/get-node owner "canvas") "2d"))

(defn highlight [owner rects]
  (let [ctx (get-ctx owner)
        canvas (.-canvas ctx)
        cw (.-width canvas)
        ch (.-height canvas)]
    (set! (.-fillStyle ctx) "rgb(255, 255, 255")
    (.clearRect ctx 0 0 cw ch)
    (set! (.-globalAlpha ctx) 0.5)
    (.fillRect ctx 0 0 cw ch)
    (doall (map #(.clearRect ctx (:x %) (:y %) (:w %) (:h %)) rects))))

(defn clear-highlight [e owner]
  (let [target (.-target e)
        container (om/get-node owner "container")]
    (when (= target container)
      (highlight owner [{:x 0 :y 0 :w 512 :h 94}]))))

(defn build-item [{:keys [rect name description]} owner]
  (let [over-fn (fn [] (highlight owner rect))]
    [:div.hud-explorer-entry {:on-mouse-over over-fn
                              :on-touch-start over-fn}
     [:div.hud-explorer-entry-name name]
     [:div.hud-explorer-entry-description description]]))

(defn build-items [items owner]
  (map #(build-item % owner) items))

(defn cmp [app owner]
  (reify
    om/IInitState
    (init-state [_]
      {:open false
       :active-index 0})

    om/IRenderState
    (render-state [_ {:keys [open]}]
      (let [click-fn (fn [] (om/update-state! owner :open not))]
        (html [:div.hud-explorer (if open
                                   {:ref "container" :on-mouse-out #(clear-highlight % owner)}
                                   {:class "clickable"
                                    :on-click click-fn
                                    :on-touch-end click-fn})
               
               [:div.hud-explorer-img-container
                [:img {:src "img/hud.png"}]
                [:canvas {:width 512 :height 94 :ref "canvas"}]]
               
               (if open
                 [:div (build-items hud-items owner)]
                 [:div.hud-explorer-closed
                  "click to explore the heads up display ..."]  )

               (if open
                 [:div.clickable.hud-explorer-toggle-tray {:on-click click-fn
                                                           :on-touch-end click-fn}
                  [:i.fa.fa-caret-up]]
                 [:div.clickable.hud-explorer-toggle-tray
                  [:i.fa.fa-caret-down]])])))))
