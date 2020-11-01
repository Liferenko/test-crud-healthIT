(ns cliniqBackend.core
  (:require [toucan.db :as db]
            [toucan.models :as models]
            [ring.adapter.jetty :refer [run-jetty]]
            [ring.middleware.cors :refer  [wrap-cors]]
            [ring.middleware.multipart-params :refer  [wrap-multipart-params]] 
            [compojure.api.sweet :refer [api routes]]
            [cliniqBackend.patient :refer [patient-routes]])
  (:gen-class))

(def db-spec
  {:dbtype "postgres"
   :dbname "tiny-cliniq"
   :user "tinydev"
   :password "dummypassweneedtochangeandsaveinconfigs"})
 
(def app (api (apply routes patient-routes)))

(defn -main
  [& args]
  (db/set-default-db-connection! db-spec)
  (models/set-root-namespace! 'cliniqBackend.models)
  (run-jetty (wrap-cors (wrap-multipart-params app) 
                        :access-control-allow-methods #{:get :post :delete :options}
                        :access-control-allow-headers #{:accept :content-type}
                        :access-control-allow-origin [#"http://localhost:3000"]) {:port 3001}))
