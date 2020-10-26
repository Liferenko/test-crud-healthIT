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
(defn formInput 
  [atomValue placeholder value]
  [:div.col-6
     [:input.input-group-text {:type "text"
                               :value atomValue
                               :placeholder placeholder
                               :on-change (fn [event]
                                            (reset! value (.-value (.-target event))))}]
  ])

(defn patient-form []
  (let [fullName (r/atom "") 
        gender (r/atom "other")
        birthDate (r/atom "")
        address (r/atom "")
        policyNumber (r/atom "")]
    (fn []
    [:div.card-body 
     [:h4.card-title "New patient's data"]
     [:form {:on-submit (fn [event] 
                         (.preventDefault event) 
                         (swap! patients conj {:fullName @fullName
                                               :gender @gender
                                               :birthDate @birthDate
                                               :address @address
                                               :policyNumber @policyNumber
                                               :verified false })
                         (reset! fullName "")
                         (reset! address "")
                         )}
      [:div.row
       [formInput @fullName "Full name" fullName]
       [formInput @gender "Select gender" gender]
       [formInput @birthDate "Birth date" birthDate]
       [formInput @address "Address" address]
       [formInput @policyNumber "Enter incurance policy number" policyNumber]
      ]

       [:button.btn.btn-primary {:type :submit} "Add new patient"]
     ]])))


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
     [:div.col 
      [:button.btn.btn-light.btn-sm "TODO"]]
   ]])

(defn footer []
  [:div.row
   [:div.container.jumbotron
    [:div [:p.text-muted "(c) All right reserved | Tiny Cliniq, 2020"]]]])


(defn home-page []
  [:div
    [header]
    [:div.container-fluid.col-sm-12.col-md-6 [:h2 "List of patients"]
     [:ul.container-fluid
      (for [patient @patients]
        (patient-data patient))]
    ]
     [:div.card.col-sm-12.col-md-6 {:style {:padding "10px" :margin "20px"}}
       [:p "Add a new patient's info below:"]
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
