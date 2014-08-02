(ns daisy.client.tools.crop-tool
  (:require [daisy.client.canvas-util :as util]))

(defn- crop-frame [ctx frame x y sw sh dw dh]
  (let [source-img-data (.createImageData ctx sw sh)
        source-data (.-data source-img-data)]
    (.set source-data frame)
    (.putImageData ctx source-img-data 0 0)
    (let [dest-img-data (.getImageData ctx x y dw dh)]
      (.-data dest-img-data))))

(defn crop-frames [frames sw sh {:keys [x y w h] :as spec} cb progress-cb]
  (let [cropped-frames #js []
        canvas (util/create-canvas sw sh)
        context (.getContext canvas "2d")
        i (atom 0)]
    (letfn [(step []
              (if (= (alength cropped-frames) (alength frames))
                (do
                  (set! js/frames nil) ;; fixes a large memory leak
                  (cb cropped-frames spec))
                (do
                  (.push cropped-frames (crop-frame context (aget frames @i) x y sw sh w h))
                  (swap! i inc)
                  (progress-cb @i (alength frames))
                  (js/setTimeout step 1))))]
      (step))))

