(ns mario.activatable-animated-gif-view
  (:require [goog.events :as gevents]
            [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]))

(defn get-src [gif-loaded src]
  (if gif-loaded
    (str src ".gif")
    (str src "-poster.png")))

(defn z-index [show]
  #js {:zIndex (if show 100 50)})

(defn get-img-attrs [gif-loaded src w h]
  (let [attrs {:key (str src (if gif-loaded "-gif" "-poster"))
               :src (str src (if gif-loaded ".gif" "-poster.png"))}]
    (if (and w h)
      (assoc attrs :width w :height h)
      attrs)))

(defn load-gif [owner src]
  (om/set-state! owner :gif-loading true)
  (let [i (js/Image.)]
    (set! (.-onload i) #(om/set-state! owner :gif-loaded true))
    (set! (.-src i) (str src ".gif"))))

(defn cmp [{:keys [video-src active width height]} owner]
  (reify
    om/IDisplayName
    (z-index-name [_] "activatable-animated-gif-view")

    om/IInitState
    (init-state [_]
      {:gif-loaded false
       :gif-loading false})

    om/IDidUpdate
    (did-update [_ {:keys [active]} {:keys [gif-loading]}]
      (let [cur-active (:active (om/get-props owner))]
        (when (and cur-active (not gif-loading))
          (load-gif owner video-src))))

    om/IDidMount
    (did-mount [_]
      (when active
        (load-gif owner video-src)))
    
    om/IRenderState
    (render-state [_ {:keys [gif-loaded]}]
      (html
       [:div.activatable-animated-gif-view 
        [:img
         (get-img-attrs gif-loaded video-src width height)]]))))
