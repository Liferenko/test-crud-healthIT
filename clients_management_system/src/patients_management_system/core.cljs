(ns patients-management-system.core
    (:require
      [reagent.core :as r]
      [reagent.dom :as d]))

(def patients (r/atom 
             [{:fullName "Robin Scherbatski" 
               :gender "female" 
               :birthDate "TODO date as valid Date structure" 
               :address "Toronto"
               :policyNumber "123-45-6789" 
               :verified false}
              {:fullName "Sam Bridges" 
               :gender "male" 
               :birthDate "TODO date as valid Date structure" 
               :address "Lion" 
               :policyNumber "123-45-6789" 
               :verified true}
              {:fullName "Mario Fernandes" 
               :gender "other" 
               :birthDate "TODO date as valid Date structure" 
               :address "New Jersey" 
               :policyNumber "123-45-6789" 
               :verified false}
              ]))

;; -------------------------
;; Views

(defn patient-form []
  (let [new-patient (r/atom "")]
    (fn []
    [:div.container 
     [:form {:on-submit (fn [event] 
                         (.preventDefault event) 
                         (swap! patients conj {:verified false :fullName @new-patient})
                         (reset! new-patient "")
                         )}
     [:input.input-group-text {:type "text" 
                               :value @new-patient 
                               :placeholder "Add a new item below:"
                               :on-change (fn [event] 
                                            (reset! new-patient (.-value (.-target event))))}]]])))

(defn header []
  [:div.row
   [:div.container.jumbotron
    [:div.text-center "Welcome to Tiny Cliniq!"]]])

(defn patient-data [patient]
  [:li.list-group-item.list-group-item-action
   {:style {:color (if (:verified patient) "green" "red")}} 
   [:div.row
     [:div.col (:fullName patient)] 
     [:div.col (:gender patient)] 
     [:div.col (:birthDate patient)]
     [:div.col (:address patient)]
     [:div.col (:policyNumber patient)]
   ]])

(defn footer []
  [:div.row
   [:div.container.jumbotron
    [:div "(c) All right reserved | Tiny Cliniq, 2020"]]])


(defn home-page []
  [:div
    [header]
    [:div.container-fluid [:h2 "List of patients"]
     [:p "Add a new patient's info below:"]
     [:ul.container-fluid
      (for [patient @patients]
        (patient-data patient))]
     [patient-form]
    ]
    [footer]
  ])

;; -------------------------
;; Initialize app

(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn ^:export init! []
  (mount-root))
