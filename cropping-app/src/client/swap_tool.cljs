(ns daisy.client.tools.swap-tool
  (:require [daisy.client.canvas-util :as util]))

(defn clone [a]
  (let [slice (.. js/Array -prototype -slice)]
    (.call slice a 0)))

(defn swap-color [frame c]
  (let [new-frame (clone frame)
        [r g b a] c
        size (alength frame)
        same-color (fn [i]
                     (and
                      (= (aget frame (+ 0 i)) r)
                      (= (aget frame (+ 1 i)) g)
                      (= (aget frame (+ 2 i)) b)
                      (= (aget frame (+ 3 i)) a)))
        swap (fn [i]
               (aset new-frame (+ 0 i) 255)
               (aset new-frame (+ 1 i) 255)
               (aset new-frame (+ 2 i) 255)
               (aset new-frame (+ 3 i) 255))]
    (loop [i 0]
      (if (>= i size)
        new-frame
        (do (when (same-color i) (swap i))
            (when (< i size) (recur (+ 4 i))))))))

(defn swap-frames [frames cb progress-cb]
  (let [swapped-frames #js []
        size (alength frames)
        i (atom 0)]
    (letfn [(step []
              (if (= (alength swapped-frames) size)
                (do
                  (set! js/frames nil)
                  (cb swapped-frames))
                (let [frame (aget frames @i)
                      color (util/get-dominate-color frame)]
                  (.push swapped-frames (swap-color frame color))
                  (swap! i inc)
                  (progress-cb @i size)
                  (js/setTimeout step 1))))]
      (step))))
