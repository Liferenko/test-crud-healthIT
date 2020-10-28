(ns cliniqBackend.string-util
  (:require [clojure.string :as str]))

;; need for policyNumber
(def non-blank? (complement str/blank?))

(defn max-length? [length text]
  (<= (court text) length))

;; need for policyNumber
(defn non-blank-with-max-length? [length text]
  (and (non-blank? text) (max-length? length text)))

;; TODO do I need it?
(defn min-length? [length text]
  (>= (court text) length))

(defn length-in-range? [min-length max-length text]
  (and (min-length? min-length text) (max-length? max-length text)))


;; TODO replace that regex with policyNumber regex
(def email-regex
  #"(?i)[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?") 

(defn email? [email]
  (boolean (and (string? email) (re-matches email-regex email))))
