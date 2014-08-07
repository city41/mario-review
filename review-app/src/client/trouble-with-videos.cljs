(ns mario.trouble-with-videos
  (:require [om.core :as om :include-macros true]
            [mario.util :as util]
            [sablono.core :as html :refer-macros [html]]))

(defn should-display-for-video []
  #js {:display (if (util/must-use-gifs) "none" "")})

(defn should-display-for-gif []
  #js {:display (if (util/force-gifs) "" "none")})

(defn cmp [_ _]
  (reify
    om/IDisplayName
    (display-name [_] "trouble-with-videos::cmp")
    
    om/IRender
    (render [_]
      (html [:div
             [:div.trouble.hidden-xs {:style (should-display-for-gif)}
              "Prefer videos instead of gifs? "
              [:a {:href "index.html"} "go back to the video version"]]
             [:div.trouble.hidden-xs {:style (should-display-for-video)}
              "Having trouble with the videos? Try the "
              [:a {:href "index.html?forceGifs"} "animated gif version"]]]))))
