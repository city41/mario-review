(ns daisy.atom.frame-writer
  (:require [cljs.nodejs :as node]))

(defn create-screenshot [e base64-str]
  (let [dialog (node/require "dialog")
        fs (node/require "fs")
        buffer (js/Buffer. base64-str "base64")
        dialogcb (fn [chosen-path]
                   (when chosen-path
                     (.writeFileSync fs chosen-path buffer)))]
    (.showSaveDialog dialog #js {} dialogcb)))

(def video-temp-dir "/Users/matt/.daisy/")

(defn prep-temp-dir []
  (let [rimraf (node/require "rimraf")
        mkdirp (node/require "mkdirp")]
    (.sync rimraf video-temp-dir)
    (mkdirp video-temp-dir)))

(defn pad [num size]
  (let [s (str num)
        len (count s)
        needed-zeros (- size len)
        zeros (apply str (repeat needed-zeros "0"))]
    (str zeros s)))


(defn get-file-name [index]
  (let [padded (pad index 4)]
    (str video-temp-dir "frame" padded ".png")))

(defn dump-frame [frame-index base64-data]
  (let [fs (node/require "fs")
        buffer (js/Buffer. base64-data "base64")]
    (.writeFileSync fs (get-file-name frame-index) buffer)))

(def rm-original "rm -rf *PATH*.*")
(def ffmpeg-command-mp4 "ffmpeg -r 60 -i frame%04d.png -c:v libx264 -r 30 -pix_fmt yuv420p *PATH*.mp4")
(def ffmpeg-command-webm "ffmpeg -r 60 -i frame%04d.png -vcodec libvpx -minrate 120k -maxrate 120k -b:v 120k *PATH*.webm")
(def convert-gif "convert -dispose none -delay 3 frame*[02468].png -coalesce *PATH*.gif")


(defn create-movie []
  (let [dialog (node/require "dialog")
        process (node/require "child_process")
        dialogcb (fn [chosen-path]
                   (when chosen-path
                     (let [command (.replace (str rm-original "&&" ffmpeg-command-mp4 " && " ffmpeg-command-webm "&&" convert-gif) (js/RegExp "\\*PATH\\*" "g") chosen-path)
                           processcb (fn [err stdout stderr]
                                       (println err)
                                       (println stdout)
                                       (println stderr))]
                       (.exec process command #js {:cwd video-temp-dir } processcb))))]
    (.showSaveDialog dialog #js {} dialogcb)))

(defn capture-frame-for-video [e frame-spec]
  (let [frame-index (.-frameindex frame-spec)
        total-frames (.-total frame-spec)
        base64-data (.-base64 frame-spec)]
    (when (zero? frame-index) (prep-temp-dir))
    (dump-frame frame-index base64-data)
    (when (= (dec total-frames) frame-index) (create-movie))))

(def raw (atom nil))

(defn save-raw [raw]
  (let [dialog (node/require "dialog")
        dialogcb (fn [chosen-path]
                   (when chosen-path
                     (let [fs (node/require "fs")]
                       (.writeFile fs chosen-path (js/Buffer. raw) #(println "RAW saved at " chosen-path)))))]
    (.showSaveDialog dialog #js {} dialogcb)))

(defn capture-frame-for-raw [e frame-spec]
  (let [frame-index (.-frameindex frame-spec)
        total-frames (.-total frame-spec)
        data (.-frame frame-spec)]
    (when (zero? frame-index) (reset! raw #js []))
    (reset! raw (.concat @raw data))
    (when (= (dec total-frames) frame-index) (save-raw @raw))))

(defn init []
  (let [ipc (node/require "ipc")]
    (.on ipc "capture-frame-for-video" capture-frame-for-video)
    (.on ipc "capture-frame-for-raw" capture-frame-for-raw)
    (.on ipc "create-screenshot" create-screenshot)))
