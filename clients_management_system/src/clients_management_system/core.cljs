(ns clients-management-system.core
    (:require
      [reagent.core :as r]
      [reagent.dom :as d]))

(def clients (r/atom 
             [{:fname "Sam" :lname "Johnson" :city "Lion" :verified true}
              {:fname "Mario" :lname "Addy" :city "New Jersey" :verified false}
              {:fname "Carlos" :lname "Perez" :city "Mexico" :verified false}]))

;; -------------------------
;; Views

(defn client-form []
  (let [new-item (r/atom "")]
    (fn []
    [:form {:on-submit (fn [event] 
                         (.preventDefault event) 
                         (swap! clients conj {:verified false :fname @new-item})
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
   (:fname client) " | " (:lname client) " | " (:city client)])

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
