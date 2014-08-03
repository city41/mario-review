(ns mario.music-player
  (:require [om.core :as om :include-macros true]
            [mario.util :as util]
            [sablono.core :as html :refer-macros [html]]))

(defn build-song-entry [owner index active-index {:keys [thumb-src name]}]
  (let [active (= index active-index)
        click-fn (fn []
                   (let [a (om/get-node owner "audio")
                         first-play (om/get-state owner :first-play)]
                     (when first-play
                       (.play a)
                       (om/set-state! owner :first-play false))
                     (om/set-state! owner :active-index (if active nil index))))]
    [:div.music-player-song-entry {:class (str "clickable" (when active " active-song"))
                                   :on-click #(when-not (util/must-use-gifs) (click-fn))
                                   :on-touch-end click-fn}
     [:img {:src thumb-src :title name}]]))

(defn build-controls [owner songs active-index name minimized]
  [:div.music-player-controls {:class (str "" (when minimized "clickable"))}
   [:button.music-player-toggle-button {:on-click #(om/update-state! owner :minimized not)}
    (if minimized
      [:i.fa.fa-caret-up]
      [:i.fa.fa-caret-down])]
   (if minimized
     [:div.music-player-current-title
      (if active-index name "music player, click to open")]
     (map-indexed #(build-song-entry owner %1 active-index %2) songs))
   (when-not minimized
     [:div.music-player-current-title.clear {:style #js {:marginLeft "23px"}}
      (or name "Click icon to play, click again to stop")])])

(defn set-next-song-active [owner i total]
  (let [next (mod (inc i) total)]
    (om/set-state! owner :active-index next)))


(defn cmp [{:keys [songs] :as app} owner]
  (reify
    om/IDisplayName
    (display-name [_] "music-player::cmp")
    
    om/IInitState
    (init-state [_]
      {:minimized true
       :active-index nil
       :first-play true})

    om/IWillUpdate
    (will-update [_ next-props {:keys [active-index]}]
      (let [a (om/get-node owner "audio")
            first-play (om/get-state owner :first-play)]
        (if (and active-index (not first-play))
          (.play a)
          (.pause a))))

    om/IDidMount
    (did-mount [_]
      (let [a (om/get-node owner "audio")]
        (.addEventListener a "ended" (fn []
                                       (let [active-index (om/get-state owner :active-index)
                                             total (count (:songs @app))]
                                         (set! (.-currentTime a) 0)
                                         (set-next-song-active owner active-index total))))))
    
    om/IRenderState
    (render-state [_ {:keys [active-index minimized]}]
      (let [active-song (if active-index (get songs active-index) nil)]
        (html [:div.music-player {:class (str "" (when minimized " clickable"))
                                  :on-click #(when minimized (om/set-state! owner :minimized false))}
               [:audio {:ref "audio"
                        :src (:file active-song)}]
               (build-controls owner songs active-index (when active-song (:name active-song)) minimized)])))))
