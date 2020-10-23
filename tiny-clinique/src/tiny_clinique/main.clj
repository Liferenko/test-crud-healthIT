(ns tiny-clinique.main
  (:require [org.httpkit.server :refer [run-server]]
            [clj-time.core :as t]
            [hiccup.core :refer [html]]
            [compojure.core :refer :all]
            [compojure.route :as route]
            ))

(defn get-time
  []
  (let [response {:status 200
                  :headers {"Content-Type" "text/html"}
                  :body (html
                   [:div.content
                     [:div.register-form
                      [:span {:class "lol"} (t/time-now)]
                     ]
                   ])}]
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
  (GET "/get-time" [] (get-time))
  (route/not-found (html [:h1.title "404. Page not found"]))
  )


(defn -main [& args]
  (run-server app {:port 8080})
  (println "Server started on port 8080"))
