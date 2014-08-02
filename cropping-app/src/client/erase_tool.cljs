(ns daisy.client.tools.erase-tool
  (:require [daisy.client.canvas-util :as util]))

(defn erase-frame [canvas frame rect]
  (util/write-frame canvas frame)
  (let [context (.getContext canvas "2d")
        dominate (util/get-dominate-color-for-canvas canvas)
        {x :x y :y w :w h :h} rect]
    (set! (.-fillStyle context) (util/to-css-color dominate))
    (.fillRect context x y w h)
    (util/get-image-data canvas)))

(defn erase-frames [frames w h rect cb progress-cb]
  (let [erased-frames #js []
        canvas (util/create-canvas w h)
        i (atom 0)]
    (letfn [(step []
              (if (= (alength erased-frames) (alength frames))
                (do
                  (set! js/frames nil)
                  (cb erased-frames))
                (do
                  (.push erased-frames (erase-frame canvas (aget frames @i) rect))
                  (swap! i inc)
                  (progress-cb @i (alength frames))
                  (js/setTimeout step 1))))]
      (step))))


