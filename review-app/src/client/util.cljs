(ns mario.util)

(defn force-gifs []
  (let [loc js/location
        href (.-href loc)]
    (> (.indexOf href "forceGifs") -1)))

(defn is-a [agent]
  (let [ua (.toLowerCase (.-userAgent js/navigator))
        agent (.toLowerCase agent)]
    (> (.indexOf ua agent) -1)))

(defn is-mobile []
  (or (is-a "IEMobile") (is-a "Android") (not (not (.-orientation js/window)))))

(defn must-use-gifs []
  (or (force-gifs) (is-mobile)))
