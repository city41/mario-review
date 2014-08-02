(ns daisy.client.canvas-util)

(extend-type js/Uint8ClampedArray
  ISeqable
  (-seq [array] (array-seq array 0)))

(defn create-canvas [w h]
  (let [canvas (.createElement js/document "canvas")]
     (set! (.-width canvas) w)
     (set! (.-height canvas) h)
     canvas))

(defn get-image-data [canvas]
  (.-data (.getImageData (.getContext canvas "2d") 0 0 (.-width canvas) (.-height canvas))))

(defn get-dominate-color [data]
  (into-array (take 4 data))
  #_(->> data
       (partition 4)
       (frequencies)
       (sort-by last >)
       (first)
       (first)
       (into-array)))

(defn get-dominate-color-for-canvas [canvas]
  (get-dominate-color (get-image-data canvas)))

(defn write-frame [canvas frame]
  (let [context (.getContext canvas "2d")
        imdata (.createImageData context (.-width canvas) (.-height canvas))
        data (.-data imdata)]
    (.set data frame)
    (.putImageData context imdata 0 0)))

(defn to-css-color [a]
  (str "rgba(" (aget a 0) "," (aget a 1) "," (aget a 2) "," (/ (aget a 3) 255) ");"))

