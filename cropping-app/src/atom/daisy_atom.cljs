(ns daisy.atom
  (:require [daisy.atom.menus :as menus]
            [daisy.atom.file-loader :as file-loader]
            [daisy.atom.frame-writer :as frame-writer]
            [cljs.nodejs :as node]))

(enable-console-print!)

(def app (node/require "app"))
(def BrowserWindow (node/require "browser-window"))

(def main-window (atom nil))

(defn app-ready []
  (reset! main-window (BrowserWindow. #js {
                                           :title "Daisy"
                                           :width 1200
                                           :min-width 1000
                                           :height 1000
                                           :min-height 600}))
  (menus/init app @main-window)
  (frame-writer/init)
  (.loadUrl @main-window (str "file://" js/__dirname "/index.html"))
  (.on @main-window "closed" #(reset! main-window nil)))

(.on app "ready" app-ready)

