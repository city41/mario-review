(ns mario.style.desktop.main
  (:require [mario.style.desktop.article :as article]
            [mario.style.desktop.media-util :as media-util]
            [mario.style.desktop.activatable-video-view :as activatable-video-view]
            [mario.style.desktop.gif-warning :as gif-warning]
            [mario.style.desktop.entity-explorer :as entity-explorer]
            [mario.style.desktop.video-to-image :as video-to-image]
            [mario.style.desktop.hud-explorer :as hud-explorer]
            [mario.style.desktop.music-player :as music-player]
            [mario.style.desktop.level-explorer :as level-explorer]
            [mario.style.desktop.sprites :as sprites]
            [garden.def :refer [defstylesheet defstyles]]
            [garden.units :refer [px]]))

(defstyles stylesheet
  (sprites/export)
  (media-util/export)
  (article/export)
  (gif-warning/export)
  (video-to-image/export)
  (activatable-video-view/export)
  (hud-explorer/export)
  (music-player/export)
  (level-explorer/export)
  (entity-explorer/export))
