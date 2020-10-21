FROM clojure
COPY . /usr/src/app
WORKDIR /usr/src/app
# Add PostgreSQL 
CMD ["lein", "run"]
