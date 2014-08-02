(ns daisy.client.tools.scale-tool
  (:require [daisy.client.constants :as c]))

(defn- scale-frame [src-canvas dest-canvas frame]
  (let [sw (.-width src-canvas)
        sh (.-height src-canvas)
        dw (.-width dest-canvas)
        dh (.-height dest-canvas)
        sctx (.getContext src-canvas "2d")
        dctx (.getContext dest-canvas "2d")
        src-img-data (.createImageData sctx sw sh)
        src-data (.-data src-img-data)]
    (set! (.-webkitImageSmoothingEnabled dctx) false)
    (set! (.-imageSmoothingEnabled dctx) false)
    (set! (.-mozImageSmoothingEnabled dctx) false)
    (.set src-data frame)
    (.putImageData sctx src-img-data 0 0)
    (.drawImage dctx src-canvas 0 0 dw dh)
    (.-data (.getImageData dctx 0 0 dw dh))))
    

(defn scale-frames [frames sw sh scale cb progress-cb]
  (let [scaled-frames #js []
        src-canvas (.createElement js/document "canvas")
        dest-canvas (.createElement js/document "canvas")
        i (atom 0)]
    (set! (.-width src-canvas) sw)
    (set! (.-height src-canvas) sh)
    (set! (.-width dest-canvas) (* scale sw))
    (set! (.-height dest-canvas) (* scale sh))
    (letfn [(step []
              (if (= (.-length scaled-frames) (.-length frames))
                (do
                  (set! js/frames nil)
                  (cb scaled-frames))
                (do
                  (.push scaled-frames (scale-frame src-canvas dest-canvas (aget frames @i)))
                  (swap! i inc)
                  (progress-cb @i (alength frames))
                  (js/setTimeout step 1))))]
      (step))))
