(defn build-system
  "Defines my system map"
  []
  (try
    (-> (component/system-map
          :server (server/make-server)
          :store (store/make-store))
        (component/system-using {:server [:store]}))
  (catch Exception e
    (error "Failed to build system" e))))
