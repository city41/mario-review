(ns daisy.client.components.canvas-view
  (:require [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [daisy.client.constants :as c]
            [daisy.client.canvas-util :as util]))

(defn load-frame [owner frames current-frame-index]
    (let [canvas (om/get-node owner "canvas")
          frame (aget frames current-frame-index)]
      (util/write-frame canvas frame)))

(defn get-left [frame-width]
  (str "calc(50% - " (/ frame-width 2) "px)"))

(defn cmp [{:keys [frames current-frame-index frame-width frame-height] :as app} owner]
  (reify
    om/IDidUpdate
    (did-update [this prev-props prev-state]
      (when frames (load-frame owner frames current-frame-index)))
    
    om/IRender
    (render [_]
      (html [:canvas {:width frame-width
                      :height frame-height
                      :style #js { :left (get-left frame-width)}
                      :ref "canvas"}]))))

