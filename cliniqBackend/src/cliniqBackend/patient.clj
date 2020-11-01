(ns cliniqBackend.patient
  (:require [schema.core :as s]
            [cliniqBackend.models.patient :refer [Patient]]
            [clojure.set :refer [rename-keys]]
            [toucan.db :as db]
            [compojure.api.sweet :refer [POST GET PUT DELETE]]
            [ring.util.http-response :refer [created ok not-found]]
          ))

(s/defschema PatientRequestSchema
  {:full_name s/Str
   :gender s/Str
   :birth_date s/Inst
   :address s/Str
   :policy_number s/Num
   :verified s/Bool})


;;;;;;;;;;;; API
;; Create
(defn id->created [id]
  (created (str "/patients/" id) {:id id}))

(defn create-patient-handler [create-patient-req]
  (->> (create-patient-req) 
       (db/insert! Patient) 
       :id 
       id->created))

;; Get one
(defn patient->response [patient]
  (if patient
    (ok patient)
    (not-found)))

(defn get-patient-handler [patient-id]
  (-> (Patient patient-id)
      patient->response))

;; Get all
(defn get-patients-handler []
  (->> (db/select Patient)
       ok))

;; Update
(defn update-patient-handler [id update-patient-req]
  (db/update! Patient id)
  (ok))

;; Delete
(defn delete-patient-handler [patient-id]
  (db/delete! Patient :id patient-id)
  (ok))


(def patient-routes 
  [(POST "/patients" []
         :body [create-patient-req PatientRequestSchema]
         (create-patient-handler create-patient-req))
   (GET "/patients/:id" [] ;; THAT WORKS
        :path-params [id :- s/Int]
        (get-patient-handler id))
   (GET "/patients" [] ;; THAT WORKS
        (get-patients-handler))
   (PUT "/patients/:id" []
        :path-params [id :- s/Int]
        :body [update-patient-req PatientRequestSchema]
        (update-patient-handler id update-patient-req))
   (DELETE "/patients/:id" [] ;; THAT WORKS
           :path-params [id :- s/Int]
           (delete-patient-handler id))])
