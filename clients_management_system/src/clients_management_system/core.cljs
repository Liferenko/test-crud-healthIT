(ns clients-management-system.core
    (:require
      [reagent.core :as r]
      [reagent.dom :as d]))

(def todos (r/atom 
             [{:desc "Boil pasta" :color "green"}
              {:desc "Run fasta" :color "red"}
              {:desc "Say No" :color "red"}]))

;; -------------------------
;; Views

(defn todo-form []
  (let [new-item (r/atom "")]
    (fn []
    [:form {:on-submit (fn [event] 
                         (.preventDefault event) 
                         (swap! todos conj {:color "green" :desc @new-item}))}
     [:input.input-group-text {:type "text" 
                               :value @new-item 
                               :placeholder "Add a new item below:"
                               :on-change (fn [event] 
                                            (reset! new-item (.-value (.-target event))))}]])))

(defn todo-item [todo]
  [:li.list-group-item.list-group-item-primary {:style (:color {:color todo})} (:desc todo) ])

(defn home-page []
  [:div.container-fluid [:h2 "List of items"]
   [:p "Add a new item below:"]
   [todo-form]
   [:ul.container-fluid
    (for [todo @todos]
      (todo-item todo))]])

;; -------------------------
;; Initialize app

(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn ^:export init! []
  (mount-root))
