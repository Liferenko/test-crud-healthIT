(ns patients-management-system.core
    (:require
      [reagent.core :as r]
      [reagent.dom :as d]
      [ajax.core :refer [GET POST PUT DELETE]]))

(def patients (r/atom []))

(defn handler [response]
  (.log js/console response))

(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "something bad happened: " status " " status-text)))


(defn get-patients []
  (GET "http://localhost:3001/patients" 
       {:handler #((swap! patients conj (last %)) (swap! patients conj (first %))) 
        :error-handler error-handler
        :response-format :json
        :keywords? true}))

(defn get-patient [patient-id]
  (GET (str "http://localhost:3001/patients/" patient-id) 
       {:handler handler
        :error-handler error-handler
        :response-format :json
        :keywords? true}))

(defn add-patient! []
  (POST "http://localhost:3001/patients"
       {:handler handler
        :error-handler error-handler
        :response-format :json
        :keywords? true}))

(defn update-patient! [patient-id]
  (PUT (str "http://localhost:3001/patients/" patient-id) ;; TODO add id as a parameter
       {:handler handler
        :error-handler error-handler
        :response-format :json
        :keywords? true}))

(defn remove-patient! [patient-id]
  (DELETE (str "http://localhost:3001/patients/" patient-id) ;; TODO add id as a parameter
       {:handler handler
        :error-handler error-handler
        :response-format :json
        :keywords? true}))


;; -------------------------
;; Views
(defn formInput 
  [input-type atomValue placeholder value]
  [:div.col-6
   [:input.input-group-text {:type input-type
                             :value atomValue
                             :placeholder placeholder
                             :on-change (fn [event]
                                          (reset! value (.-value (.-target event))))}]])

(defn patient-form []
  (let [fullName (r/atom "") 
        gender (r/atom "")
        birthDate (r/atom "")
        address (r/atom "")
        policyNumber (r/atom "")]
    (fn []
      [:div.card
        [:div.card-body 
         [:h4.card-title "New patient's data"]
         [:form {:on-submit (fn [event] 
                             (.preventDefault event) 
                             (swap! patients conj {:full_name @fullName
                                                   :gender @gender
                                                   :birth_date @birthDate
                                                   :address @address
                                                   :policy_number @policyNumber
                                                   :verified true })
                             ;;(add-patient! @patient) ;; TODO It's not finished. It is a blueprint
                             (reset! fullName "")
                             (reset! address ""))}
          [:div.row
           [formInput "text" @fullName "Full name" fullName]
           [formInput "text" @gender "Select gender" gender]
           [formInput "date" @birthDate "Birth date" birthDate]
           [formInput "text" @address "Address" address]
           [formInput "number" @policyNumber "Enter incurance policy number" policyNumber]]

           [:button.btn.btn-primary {:type :submit} "Add new patient"]]]])))

(defn header []
  [:div
   [:div.jumbotron
    [:div.text-center 
     [:h1 "Welcome to Tiny Cliniq!"]]]])

(defn patient-data [patient]
  [:li.list-group-item.list-group-item-action
   {:style {:color (if (:verified patient) "green" "red")}} 
   [:div.row
     [:div.col (:full_name patient)] 
     [:div.col (:gender patient)] 
     [:div.col (:birth_date patient)]
     [:div.col (:address patient)]
     [:div.col (:policy_number patient)]
     [:div.col.dropdown 
      [:button#dropdownMenuButton.btn.btn-light.btn-sm.dropdown-toggle 
       {:type "button" 
        :data-toggle "dropdown" 
        :aria-haspopup "true" 
        :aria-expanded "false"} "..."
         [:div.dropdown-menu
          [:span.dropdown-item {:on-click (fn [patient] (remove-patient! (:id patient)))} "Remove patient"] ;; TODO to fix an :on-click fn
          [:span.dropdown-item {:on-click (fn [patient] (update-patient! (:id patient)))} "Edit patient"]]]]]]) 

(defn content []
  [:div.row.container-fluid
    [:div.col-sm-12.col-md-7 
     [:h4 "List of patients"]
     [:ul
      (for [patient @patients]
        (patient-data patient))]
    ]
    [:div.col-sm-12.col-md-4 
     [:h4 "Add a new patient's info below:"]
     [patient-form]]])

(defn footer []
  [:div.footer
   [:div.jumbotron
    [:div [:p.text-muted "(c) All right reserved | Tiny Cliniq, 2020"]]]])


(defn home-page []
  [:div
    [header]
    [content]
    ;;[footer]
    ])

;; -------------------------
;; Initialize app

(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn ^:export init! []
  (get-patients)
  (mount-root))
