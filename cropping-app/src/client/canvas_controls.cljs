(ns daisy.client.components.canvas-controls
  (:require [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [cljs.core.async :refer [put!]]
            [daisy.client.constants :as c]))

(defn cmp [app owner]
  (reify
    om/IRender
    (render [_]
      (html [:div (str "current frame: " (inc (:current-frame-index app)) "/" (alength (:frames app)))
             [:div
               [:button {:disabled (nil? (:prev-frames app)) :on-click #(put! (:action-chan @app) {:op :undo})} "undo"]
               [:button {:on-click #(om/transact! app :current-frame-index inc)} "next"]
               [:button {:on-click #(om/transact! app :current-frame-index dec)} "prev"]
               [:button {:on-click #(om/transact! app :playing not)} (if (:playing app) "stop" "play")]]]))))
