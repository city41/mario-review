(ns mario.util)

(defn force-gifs []
  (let [loc js/location
        href (.-href loc)]
    (> (.indexOf href "forceGifs") -1)))

(defn is-mobile []
  (not (not (.-orientation js/window))))

(defn must-use-gifs []
  (or (force-gifs) (is-mobile)))
