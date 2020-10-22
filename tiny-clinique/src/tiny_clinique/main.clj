(ns tiny-clinique.main
  (:require [tiny-clinique.system :refer [init-system start!]]))

(defn -main [& args]
  (init-system)
  (start!))
