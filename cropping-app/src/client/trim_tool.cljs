(ns daisy.client.tools.trim-tool)

(defn trim-frames [frames from to cb]
  (let [trimmed-frames #js []
        size (alength frames)
        keep-frame (fn [i] (or (< i from) (>= i to)))]
    (loop [i 0]
      (if (>= i size)
        (cb trimmed-frames)
        (do (when (keep-frame i) (.push trimmed-frames (aget frames i)))
            (recur (inc i)))))))
