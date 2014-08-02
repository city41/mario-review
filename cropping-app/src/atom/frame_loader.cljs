(ns daisy.atom.frame-loader
  (:require [cljs.nodejs :as node]))

(def full-frame-width 256)
(def full-frame-height 224)
(def full-frame-size (* full-frame-width full-frame-height 3))
(def buffer-size (* full-frame-width full-frame-height 4))


(defn notify-client [window number-of-frames frames]
  (.send (.-webContents window) "frames-loaded"
         #js {:total number-of-frames
              :frames frames}))

(defn build-frame [raw-frame offset]
  (let [frame (js/Array. buffer-size)]
    (loop [fi 0 ri offset]
      (if (>= fi buffer-size) frame
        (do
          (aset frame (+ 0 fi) (aget raw-frame (+ 2 ri)))
          (aset frame (+ 1 fi) (aget raw-frame (+ 1 ri)))
          (aset frame (+ 2 fi) (aget raw-frame (+ 0 ri)))
          (aset frame (+ 3 fi) 255)
          (recur (+ 4 fi) (+ 3 ri)))))))

(defn build-daisy-frame [daisy-frame offset]
  (let [frame (js/Array. buffer-size)]
    (loop [fi 0 ri offset]
      (if (>= fi buffer-size) frame
        (do
          (aset frame (+ 0 fi) (aget daisy-frame (+ ri 0)))
          (aset frame (+ 1 fi) (aget daisy-frame (+ ri 1)))
          (aset frame (+ 2 fi) (aget daisy-frame (+ ri 2)))
          (aset frame (+ 3 fi) (aget daisy-frame (+ ri 3)))
          (recur (+ 4 fi) (+ 4 ri)))))))

(defn load-frames-for-client [window bytes]
  (let [size (alength bytes)
        number-of-frames (/ size full-frame-size)
        i (atom 0)]
    (letfn [(step []
              (if (< @i size)
                (let [frames #js []]
                  (dotimes [n 1]
                    (.push frames (build-frame bytes @i))
                    (swap! i + full-frame-size))
                  (notify-client window number-of-frames frames)
                  (js/setTimeout step 1))
                (set! js/bytes nil)))]
      (step))))

(defn load-daisy-frames-for-client [window bytes]
  (let [size (alength bytes)
        number-of-frames (/ size buffer-size)
        i (atom 0)]
    (letfn [(step []
              (if (< @i size)
                (let [frames #js []]
                  (dotimes [n 1]
                    (.push frames (build-daisy-frame bytes @i))
                    (swap! i + buffer-size))
                  (notify-client window number-of-frames frames)
                  (js/setTimeout step 1))
                (set! js/bytes nil)))]
      (step))))
