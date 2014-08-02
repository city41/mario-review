(ns daisy.client.components.intro-view
  (:require [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]))

(defn get-file [app]
  (let [remote (js/require "remote")
        dialog (.require remote "dialog")
        cb (fn [filenames]
             (om/update! app :current-file (aget filenames 0)))]
    (.showOpenDialog dialog #js {:properties #js ["openFile" "openDirectory"]} cb)))

(defn cmp [app owner]
  (reify
    om/IRender
    (render [_]
      (html [:div.intro-container
             [:div.row.logo
              [:div.large-8.large-offset-2
               [:h1
                [:img {:src "img/logo.svg" :width 100 :height 100}]
                "daisy"
                [:span.tag-line "An SNES Video Editor"]]]]
             [:div.row
              [:div.large-offset-2.large-8]]]))))
