(ns tiny-clinique.main
  (:require [org.httpkit.server :refer [run-server]]
            [clj-time.core :as t]
            [hiccup.core :refer [html]]))

(defn app [req]
  {:status 200
   :headers {"Content-Type" "text/html"}
   ;; :body (str (t/time-now))})
   :body (html [:div>div>span {:class "lol"} (t/time-now)])})

(defn -main [& args]
  (run-server app {:port 8080})
  (println "Server started on port 8080"))
