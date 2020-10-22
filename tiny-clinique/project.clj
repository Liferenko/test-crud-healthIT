;; Old version (actually auto generated from `lein new blah blah`)
;; (defproject tiny-clinique "0.1.0-SNAPSHOT"
;;  :description "tiny app for client management"
;;  :url "http://example.com/FIXME"
;;  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
;;            :url "https://www.eclipse.org/legal/epl-2.0/"}
;;  :dependencies [[org.clojure/clojure "1.10.0"],[expectations/expectations "1.4.5"]]
;;  :plugins [[lein-expectations "0.0.8"]]
;;  :main ^:skip-aot tiny-clinique.core
;;  :target-path "target/%s"
;;  :profiles {:uberjar {:aot :all}})
;; 

(defproject tiny-clinique "0.1.0-SHAPSHOT"
  :description "A simple CRUD app for clinique clients management"
  :url "https://tiny-clinique-liferenko.github.com"
  :license {:name "TODO"
            :url "TODO"}
  :dependencies [[org.clojure/clojure "1.10.0"],
                 [expectations/expectations "1.4.5"] ;; Unit tests
                 [aleph "0.4.6"] ;; TODO: to refactor it with HTTP Kit
                 [hiccup "1.0.5"] ;; HTML rendering
                 [bidi "2.1.3"]]
  :plugins [[lein-expectations "0.0.8"]]
  :main ^:skip-aot tiny-clinique.main
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}})
