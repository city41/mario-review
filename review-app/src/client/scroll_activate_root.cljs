(ns mario.scroll-activate-root
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [goog.events :as events]
            [cljs.core.async :as async :refer [<! put! chan]]
            [sablono.core :as html :refer-macros [html]])
  (:import [goog.events EventType]))

(defn listen [el type]
  (let [out (chan)]
    (events/listen el type #(put! out %))
    out))

(defn should-activate [node]
  (let [top (.-top (.getBoundingClientRect node))]
    (and (> top -117)
       (< top 200))))

(defn get-root [cmp]
  (fn [app owner]
    (reify
      om/IDisplayName
      (display-name [_] "scroll-activate-root")
      
      om/IWillMount
      (will-mount [_]
        (let [mouse-chan
              (async/map
               #(.-pageYOffset js/window)
               [(listen js/window EventType/SCROLL)])]
          (go (while true
                (let [scroll-offset (<! mouse-chan)]
                  (om/update! app :scroll-offset scroll-offset))))))

      om/IWillUpdate
      (will-update [_ {:keys [active] :as next-props} _]
        (let [node (om/get-node owner "root")]
          (when-not active
            (om/update! app :active (should-activate node)))))

      om/IRender
      (render [_]
        (html [:div {:ref "root"}
               (om/build cmp app)])))))
