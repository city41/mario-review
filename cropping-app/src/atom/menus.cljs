(ns daisy.atom.menus
  (:require [cljs.nodejs :as node]
            [daisy.atom.file-loader :as file-loader]))

(def Menu (node/require "menu"))
(def BrowserWindow (node/require "browser-window"))

(defn init [app main-window]
  (let [menu-template #js [#js {
            :label "Daisy"
            :submenu #js [ #js {
                                :label "Open RAW..."
                                :accelerator "Command+O"
                                :click #(file-loader/open-and-load-raw main-window)
                                }
                          #js {
                               :label "Open .daisy..."
                               :accelerator "Command+D"
                               :click #(file-loader/open-and-load-daisy main-window)
                               }
                           #js {
                                :label "Quit"
                                :accelerator "Command+Q"
                                :click #(.quit app)
                                }
                          #js {
                               :label "Toggle DevTools"
                               :accelerator "Alt+Command+I"
                               :click #(-> BrowserWindow
                                           .getFocusedWindow
                                           .toggleDevTools)
                               }
                          #js {
                               :label "Reload"
                               :accelerator "Command+R"
                               :click #(-> BrowserWindow
                                           .getFocusedWindow
                                           .reloadIgnoringCache)
                               }
                          ]
                          
            }
        ]
        menu (.buildFromTemplate Menu menu-template)]
    (.setApplicationMenu Menu menu)))


