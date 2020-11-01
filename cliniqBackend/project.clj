(defproject cliniqBackend "0.1.0-SNAPSHOT"
  :description "API for tiny cliniq"
  :url "http://localhost:8080"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url "https://www.eclipse.org/legal/epl-2.0/"}
  :dependencies [
                 [org.clojure/clojure "1.10.0"]
                 [prismatic/schema "1.1.9"]
                 [metosin/compojure-api "2.0.0-alpha26"]
                 [ring/ring-jetty-adapter "1.6.3"]
                 [ring-cors "0.1.13"] 
                 
                 [toucan "1.1.9"]
                 [org.postgresql/postgresql "42.2.4"]
                ]
  :main ^:skip-aot cliniqBackend.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}})
