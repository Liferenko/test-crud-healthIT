(defproject tiny-clinique "0.1.0-SHAPSHOT"
  :author "Pavel Liferenko"
  :description "A simple CRUD app for clinique clients management"
  :url "https://tiny-clinique-liferenko.github.com"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url "https://www.eclipse.org/legal/epl-2.0/"}
  :dependencies [[org.clojure/clojure "1.10.0"]
                 [http-kit "2.5.0"]
                 [clj-time "0.14.0"]
                 [hiccup "1.0.5"]
                 [compojure "1.6.2"]
                ]
  :repl-options {:init-ns tiny-clinique.main}
  :main tiny-clinique.main)
