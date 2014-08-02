(ns daisy.atom.file-loader
  (:require [cljs.nodejs :as node]
            [daisy.atom.frame-loader :as frame-loader]))

(defn base-name [path-str]
  (let [path (node/require "path")]
    (.basename path path-str)))

(defn notify-client-new-file-name [window file-path]
  (.send (.-webContents window) "new-file-chosen"
         #js {:filename (base-name file-path)}))

(defn open-and-load-raw [window]
  (let [dialog (node/require "dialog")
        cb (fn [chosen-raw-file-paths]
             (when chosen-raw-file-paths
               (let [fs (node/require "fs")
                     chosen-raw-file-path (aget chosen-raw-file-paths 0)
                     fscb (fn [error loaded-file]
                            (frame-loader/load-frames-for-client window loaded-file))]
                 (notify-client-new-file-name window chosen-raw-file-path)
                 (.readFile fs chosen-raw-file-path fscb))))]
    (.showOpenDialog dialog window #js {:properties #js ["openFile"]} cb)))

(defn open-and-load-daisy [window]
  (let [dialog (node/require "dialog")
        cb (fn [chosen-daisy-file-paths]
             (when chosen-daisy-file-paths
               (let [fs (node/require "fs")
                     chosen-daisy-file-path (aget chosen-daisy-file-paths 0)
                     fscb (fn [error loaded-file]
                            (frame-loader/load-daisy-frames-for-client window loaded-file))]
                 (notify-client-new-file-name window chosen-daisy-file-path)
                 (.readFile fs chosen-daisy-file-path fscb))))]
    (.showOpenDialog dialog window #js {:properties #js ["openFile"]} cb)))
