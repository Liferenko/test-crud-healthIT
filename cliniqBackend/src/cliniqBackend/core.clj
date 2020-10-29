(ns cliniqBackend.core
  (:require [toucan.db :as db]
            [toucan.models :as models]
            [ring.adapter.jetty :refer [run-jetty]]
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
  (run-jetty app {:port 3001}))
