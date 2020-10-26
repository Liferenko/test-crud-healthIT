(ns clients-management-system.core
    (:require
      [reagent.core :as r]
      [reagent.dom :as d]))

(def clients (r/atom 
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

(defn client-form []
  (let [new-item (r/atom "")]
    (fn []
    [:form {:on-submit (fn [event] 
                         (.preventDefault event) 
                         (swap! clients conj {:verified false :fullName @new-item})
                         (reset! new-item "")
                         )}
     [:input.input-group-text {:type "text" 
                               :value @new-item 
                               :placeholder "Add a new item below:"
                               :on-change (fn [event] 
                                            (reset! new-item (.-value (.-target event))))}]])))

(defn client-data [client]
  [:li.list-group-item.list-group-item-primary
   {:style {:color (if (:verified client) "green" "red")}} 
   [:div.row
     [:div.col (:fullName client)] 
     [:div.col (:gender client)] 
     [:div.col (:birthDate client)]
     [:div.col (:address client)]
     [:div.col (:policyNumber client)]
   ]])

(defn home-page []
  [:div.container-fluid [:h2 "List of clients"]
   [:p "Add a new client's info below:"]
   [client-form]
   [:ul.container-fluid
    (for [client @clients]
      (client-data client))]])

;; -------------------------
;; Initialize app

(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn ^:export init! []
  (mount-root))
