(ns daisy.client.components.export-view
  (:require [om.core :as om :include-macros true]
            [cljs.core.async :refer [put!]]
            [sablono.core :as html :refer-macros [html]]))

(def data-url-header "data:image/png;base64,")

(defn create-canvas [w h]
  (let [canvas (.createElement js/document "canvas")]
    (set! (.-width canvas) w)
    (set! (.-height canvas) h)
    canvas))

(defn to-base64 [frame w h]
  (let [canvas (create-canvas w h)
        ctx (.getContext canvas "2d")
        imdata (.createImageData ctx w h)]
    (.set (.-data imdata) frame)
    (.putImageData ctx imdata 0 0)
    (.replace (.toDataURL canvas) data-url-header "")))

(defn export-as-mp4 [frames w h chan]
  (let [i (atom 0)
        size (alength frames)]
    (letfn [(step []
              (when (< @i size)
                (let [data (to-base64 (aget frames @i) w h)]
                  (put! chan {:op :capture-frame-for-video
                              :arg {:frame-index @i
                                    :total size
                                    :base64 data
                                    }})
                  (swap! i inc)
                  (js/setTimeout step 5))))]
      (step))))

(defn save-raw [frames chan]
  (let [i (atom 0)
        size (alength frames)]
    (letfn [(step []
              (when (< @i size)
                (let []
                  (put! chan {:op :capture-frame-for-raw
                              :arg {:frame-index @i
                                    :total size
                                    :frame (aget frames @i)
                                    }})
                  (swap! i inc)
                  (js/setTimeout step 5))))]
      (step))))

(defn cmp [app owner]
  (reify
    om/IRender
    (render [_]
      (html [:div
             [:button {:on-click #(export-as-mp4 (:frames @app)
                                                 (:frame-width @app)
                                                 (:frame-height @app)
                                                 (:action-chan @app))}
              "export as mp4, webm and gif"]
             
             [:button {:on-click #(put! (:action-chan @app) {:op :export-screenshot
                                                             :arg (to-base64
                                                                   (aget (:frames @app) (:current-frame-index @app))
                                                                   (:frame-width @app)
                                                                   (:frame-height @app))})}
              "export current frame as png"]

             [:button {:on-click #(save-raw (:frames @app) (:action-chan @app))} "save RAW"]]))))
