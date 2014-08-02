(defproject crop "0.0.1"
  :description "cropping spike"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2202"]
                 [org.clojure/core.async "0.1.303.0-886421-alpha"]
                 [om "0.6.2"]
                 [sablono "0.2.17"]]

  :profiles {:dev {:dependencies [[ring/ring-jetty-adapter "1.1.1"]
                                  [compojure "1.1.0"]]}}

  :main server.core

  :plugins [[lein-cljsbuild "1.0.3"]]

  :source-paths ["src"]

  :cljsbuild {
              :builds [{
                        :source-paths ["src/client"]
                        :compiler {:output-to "public/js/daisy_client.js"
                                   :output-dir "public/js/dev"
                                   :optimizations :none
                                   :pretty-print true
                                   :source-map true}
                       }
                       {
                        :source-paths ["src/atom"]
                        :compiler {:output-to "public/daisy_atom.js"
                                   :optimizations :simple}
                       }]
              }
)
