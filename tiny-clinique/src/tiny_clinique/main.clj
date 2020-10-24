(ns tiny-clinique.main
  (:use [hiccup.page :only (include-css)])
  (:require [org.httpkit.server :refer [run-server]]
            [clj-time.core :as t]
            [hiccup.core :refer [html]]
            [compojure.core :refer :all]
            [compojure.route :as route]
            ))



(defn patient-data
  [patient_name & patient_city]
  (let [response {:status 200
                  :headers {"Content-Type" "text/html"}
                  :body (html
                    [:head
                     [:title "Welcome back, " patient_name]
                     (include-css "https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css")
                    ]
                    [:body
                   [:div.content
                     [:div.jumbotron
                      [:h3.patient__name "First name: " patient_name]
                      [:h4.patient__city "City: " patient_city]
                      [:span {:class "lol"} "Time in " patient_city " " (t/time-now)] ] ] ])}]
    response)
  )

(defn list-of-patients
  [list_of_patients]
  (let [response {:status 200
                  :headers {"Content-Type" "text/html"}
                  :body (html
                    [:head [:title "List of pacients"]]
                    [:body
                   [:div.content
                     [:div.register-form
                      [:span {:class "lol"} "List: " (first list_of_patients)]]]])}]
    response)
  )

(defn index
  []
  (let [response {:status 200
     :headers {"Content-Type" "text/html"}
     :body (html
              [:head
               [:title "Welcome"]
               (include-css "https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css")
              ]
              [:body
               [:div.header
                [:h1.title "Welcome to Tiny Clinique"]
                [:h3.description "Hello from port 8080."]
               ]
               [:div.content
                 [:div.register-form
                  [:span {:class "lol"} (t/time-now)]
                 ]]])}]
    response))

(defroutes app
  (GET "/" [] (index))
  (GET "/list" [] (list-of-patients ["Max Mad" "Teo Roussevelt" "Al Pacino" "Lagerfeld" "Mastiff" "Danko"]))
  ;;(GET "/new-patient" [] (new-patient "Sergey" "Lion"))
  (GET "/patient-info" [] (patient-data "Paul" "Kiev"))
  (route/not-found (html [:h1.title "404. Page not found"]))
  )


(defn -main [& args]
  (run-server app {:port 8080})
  (println "Server started on port 8080"))
