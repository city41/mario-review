(defproject mario "0.0.1"
  :license {:name "ISC"
            :url "http://opensource.org/licenses/ISC"
            :distribution :repo}

  :description "retro review experiment"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2202"]
                 [org.clojure/core.async "0.1.303.0-886421-alpha"]
                 [garden "1.1.8"]
                 [om "0.6.2"]
                 [sablono "0.2.17"]]

  :profiles {:dev {:dependencies [[ring/ring-jetty-adapter "1.1.1"]
                                  [compojure "1.1.0"]]}}

  :main server.core

  :plugins [[lein-cljsbuild "1.0.3"]
            [lein-garden "0.1.8"]]

  :source-paths ["src" "src/garden"]

  :garden {:builds [{:id "desktop"
                     :stylesheet mario.style.desktop.main/stylesheet
                     :compiler {
                                :vendors ["webkit" "moz" "o" "ie"]
                                :output-to "public/css/mario-desktop.css"
                                :prety-print? true}}]}
  
  :cljsbuild {
              :builds [{
                        :source-paths ["src"]
                        :compiler {:output-to "public/js/mario.js"
                                   :output-dir "public/js/dev"
                                   :optimizations :none
                                   :pretty-print true
                                   :source-map true}
                       }]
              })
