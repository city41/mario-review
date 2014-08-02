(ns mario
  (import javax.imageio.ImageIO)
  (import java.io.File)
  (import java.awt.image.BufferedImage)
  (import java.lang.Runtime)
  (:require [clojure.java.io :refer [file output-stream input-stream]])
  (:require [clojure.string :refer [split]])
  (:require [clojure.java.shell :refer [sh]]))

(def frame-width 256)
(def frame-height 224)
(def frame-size (* frame-width frame-height 3))
(def root "mario-walk")
(def include-audio false)

(defn get-file-size [filename]
  (.length (File. filename)))

(defn get-file-bytes [filename]
  (let [filesize (get-file-size filename)
        buf (byte-array filesize)]
    (with-open [in (input-stream (file filename))]
      (.read in buf)
      buf)))

(defn frame-chunks [buffer]
  (partition frame-size buffer))

(defn bgr-to-rgb [buffer]
  (byte-array (apply concat (vec (map reverse (partition 3 buffer))))))

(def bi (BufferedImage. frame-width frame-height BufferedImage/TYPE_3BYTE_BGR))
(def r (.getRaster bi))

(defn create-image [bgr-frame-bytes name]
  (let [frame-bytes (bgr-to-rgb bgr-frame-bytes)]
        (println "create-image " name)
        (.setDataElements r 0 0 frame-width frame-height frame-bytes)
        (ImageIO/write bi "png" (File. (str name ".png")))))

(defn pad [size s]
  (format (str "%0" size "d") s))

(defn create-video [rootname with-audio]
  (let [audio (if with-audio " -i audio.wav " " ")
        command (split (format "-r 60 -i %s%%03d.png%s-c:v libx264 -r 20 -pix_fmt yuv420p %s.mp4" rootname audio rootname) #"\s")
        program "ffmpeg"]
    (println (str "executing: " program " " (apply str (interpose " " command))))
    (println (:err (apply sh program command)))))

(defn create-images [file rootname]
  (let [raw-bytes (get-file-bytes file)
        frames (frame-chunks raw-bytes)
        frames-to-process (if include-audio frames (rest frames))]
        (println (str "number of frames " (/ (count raw-bytes) frame-size)))
        (dorun (map-indexed #(create-image %2 (str rootname (pad 3 %1))) frames-to-process))
        (println "images created!")))

(create-images "rawvideo-mario-walk.bin" root)
(create-video root include-audio)
(println "all done")
