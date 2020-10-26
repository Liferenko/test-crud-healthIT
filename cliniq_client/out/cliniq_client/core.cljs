(ns cliniq_client.core)

(println "Hello, I'm ClojureScript from client from port 9000")

(defn average [a b c d]
  (/ (+ a b c d) 2.0))


(defn try_map
  []
  (map #(str "Salam " % "! Wassup?") ["Mahmed" "Edgar" "Faruh"]))
