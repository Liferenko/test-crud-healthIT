(defn render-form
  "Render a simple HTML form page"
  []
  (html5 [:head
          [:meta {:charset "UTF-8"}]
         ]
         [
          :body
            (form-to [:post "/"]
                     (text-area {:col 80
                                 :rows 10} "content")
                     [:div]
                     (submit-button "Paste!"))]))
