(ns tiny-clinique.main
  (:require [org.httpkit.server :refer [run-server]]
            [clj-time.core :as t]
            [hiccup.core :refer [html]]
            [compojure.core :refer :all]
            [compojure.route :as route]
            ))

(defn patient-data
  [title & content]
  (let [response {:status 200
                  :headers {"Content-Type" "text/html"}
                  :body (html
                    [:head [:title title]]
                    [:body
                   [:div.content
                     [:div.register-form
                      [:span {:class "lol"} "Time in " content " " (t/time-now)] ] ] ])}]
    response)
  )

(defn index
  []
  (let [response {:status 200
     :headers {"Content-Type" "text/html"}
     ;; :body (str (t/time-now))})
     :body (html
             [:div.header
              [:h1.title "Welcome to Tiny Clinique"]
              [:h3.description "Hello from port 8080."]
             ]
             [:div.content
               [:div.register-form
                [:span {:class "lol"} (t/time-now)]
               ]
             ]
             )}]
    response))

(defroutes app
  (GET "/" [] (index))
  (GET "/patient-info" [] (patient-data "Paul" "Kiev"))
  (route/not-found (html [:h1.title "404. Page not found"]))
  )


(defn -main [& args]
  (run-server app {:port 8080})
  (println "Server started on port 8080"))
