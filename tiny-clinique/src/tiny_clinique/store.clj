(defrecord InMemoryStore [data]
  component/Lifecycle
  
  (start [this]
    (assoc this :data (atom {})))
  (stop [this] this))

(defn make-store
  []
  (map->InMemoryStore {}))

(defn add-new-paste
  "TODO: rewrite a desc. Imsert a new paste in DB, then retirn its UUID"
  [store content]
  (let [uuid (.toString (java.util.UUID/randomUUID))]
    (swap! (:data store) assoc (keyword uuid) {:content content})
    uuid))
(defn get-paste-by-uuid
  "TODO! Find the paste corresp to the passed-in uuid, then return it"
  [store uuid]
  ((keyword uuid) @(:data store)))
