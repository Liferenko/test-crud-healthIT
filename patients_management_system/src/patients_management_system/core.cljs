(ns patients-management-system.core
    (:require
      [reagent.core :as r]
      [reagent.dom :as d]
      [ajax.core :refer [GET POST PUT DELETE]]))

(def patients (r/atom []))
(def temp-host 
  "http://localhost:3001/patients")

(defn handler [response]
  (.log js/console response))

(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "something bad happened: " status " " status-text)))


(defn get-patients []
  (GET temp-host 
       {:handler #(swap! patients concat %)
        :error-handler error-handler
        :response-format :json
        :keywords? true}))

(defn get-patient [patient-id]
  (GET (str temp-host "/" patient-id) 
       {:handler handler
        :error-handler error-handler
        :response-format :json
        :keywords? true}))

(defn add-patient! [params]
  (POST temp-host 
        {:handler handler
        :error-handler error-handler
        :params {:full_name params :gender params :birth_date params :address params :policy_number params :verified true }
        :response-format :json
        :keywords? true}))

(defn update-patient! [patient-id]
  (PUT (str temp-host "/" patient-id) ;; TODO add id as a parameter
       {:handler handler
        :error-handler error-handler
        :response-format :json
        :keywords? true}))

(defn remove-patient! [patient-id]
  (DELETE (str temp-host "/" patient-id) ;; TODO add id as a parameter
       {:handler handler
        :error-handler error-handler}))


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

(def new-patient [])

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
                             (add-patient! {:full_name @fullName :gender @gender :birth_date @birthDate :address @address :policy_number @policyNumber :verified true })
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
     [:div.col-1 (:id patient)] 
     [:div.col-2
      [:a {:href (str temp-host "/" (:id patient))} (:full_name patient)]] 
     [:div.col-1 (:gender patient)] 
     [:div.col-2 (:birth_date patient)]
     [:div.col-3 (:address patient)]
     [:div.col-2 (:policy_number patient)]
     [:div.col-1.dropdown 
      [:button#dropdownMenuButton.btn.btn-light.btn-sm.dropdown-toggle 
       {:type "button" 
        :data-toggle "dropdown" 
        :aria-haspopup "true" 
        :aria-expanded "false"} "..."
         [:div.dropdown-menu
          [:span.dropdown-item {:on-click #(remove-patient! (:id %))} "Remove patient"] ;; TODO to fix an :on-click fn
          [:span.dropdown-item {:on-click #(update-patient! (:id %))} "Edit patient"]]]]]]) 

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
    [:div [:p.text-muted "(c) All rights reserved | Tiny Cliniq, 2020"]]]])


(defn home-page []
  [:div
    [header]
    [content]
    ;;[footer]
    ])

;; -------------------------
;; Initialize app

(defn mount-root []
  (get-patients)
  (d/render [home-page] (.getElementById js/document "app")))

(defn ^:export init! []
  (mount-root))
