(ns daisy.client.components.rectangle-selection
  (:require [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [cljs.core.async :refer [put!]]))

(def mouse-is-down (atom false))
(def upper-corner (atom nil))
(def lower-corner (atom nil))

(defn round [n]
  (.round js/Math n))

(defn ensure-even [n]
  (if (zero? (bit-and 1 n)) n (inc n)))

(defn get-rect [upper-corner lower-corner]
  (let [ux (round (min (:x upper-corner) (:x lower-corner)))
        uy (round (min (:y upper-corner) (:y lower-corner)))
        lx (round (max (:x upper-corner) (:x lower-corner)))
        ly (round (max (:y upper-corner) (:y lower-corner)))
        w (- lx ux)
        h (- ly uy)
        w (ensure-even w)
        h (ensure-even h)]
    {:x ux :y uy :w w :h h}))


(defn has-area [rect]
  (let [{:keys [w h]} rect]
    (and (> w 0) (> h 0))))

(defn get-selection [upper-corner lower-corner]
  (let [rect (get-rect upper-corner lower-corner)] 
    (when (has-area rect) rect)))

(defn draw-rect
  ([canvas upper-corner lower-corner]
      (draw-rect canvas (get-rect upper-corner lower-corner)))

  ([canvas rect]
      (let [ctx (.getContext canvas "2d")]
        (set! (.-fillStyle ctx) "rgba(255, 255, 255, 0.8)")
        (set! (.-strokeStyle ctx) "rgba(155, 201, 161, 1)")
        (.clearRect ctx 0 0 (.-width canvas) (.-height canvas))

        (when (has-area rect)
          (.fillRect ctx 0 0 (.-width canvas) (.-height canvas))
          (.clearRect ctx (:x rect) (:y rect) (:w rect) (:h rect))
          (.strokeRect ctx (:x rect) (:y rect) (:w rect) (:h rect))))))

(defn get-canvas-xy [e]
  (let [brect (.getBoundingClientRect (.-target e))
        left (.-left brect)
        top (.-top brect)
        x (- (.-clientX e) left)
        y (- (.-clientY e) top)]
    {:x x :y y}))


(defn mouse-down [e]
  (let [canvas-xy (get-canvas-xy e)]
    (reset! mouse-is-down true)
    (reset! upper-corner canvas-xy)))

(defn mouse-move [e]
  (when @mouse-is-down
    (let [canvas-xy (get-canvas-xy e)]
      (reset! lower-corner canvas-xy)
      (draw-rect (.-target e) @upper-corner @lower-corner))))

(defn mouse-up [e app]
  (reset! mouse-is-down false)
  (reset! lower-corner (get-canvas-xy e))
  (draw-rect (.-target e) @upper-corner @lower-corner)
  (om/update! app :selection (get-selection @upper-corner @lower-corner)))

(defn get-left [frame-width]
  (str "calc(50% - " (/ frame-width 2) "px)"))

(defn cmp [app owner]
  (reify
    om/IWillUpdate
    (will-update [_ {:keys [selection] :as next-props} _]
      (let [prev-selection (:selection (om/get-props owner))]
        (when-not (= selection prev-selection)
          (draw-rect (om/get-node owner "rectangle-selection") selection))))

    om/IRender
    (render [_]
      (html [:canvas.rectangle-selection {
                          :ref "rectangle-selection"
                          :style #js {:left (get-left (:frame-width app))}
                          :on-mouse-down mouse-down
                          :on-mouse-move mouse-move
                          :on-mouse-up   #(mouse-up % app)
                          :width (:frame-width app)
                          :height (:frame-height app)}]))))
