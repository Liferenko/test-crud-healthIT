FROM clojure
WORKDIR /usr/src/app
RUN ["apt-get", "update"]
RUN ["apt-get", "install", "-y", "vim"]
RUN ["apt-get", "install", "-y", "tree"]
COPY . /usr/src/app
RUN ["mv", ".vimrc", "//root/.vimrc"]
EXPOSE 8080

# Maybe I can use that docker-compose example for psql+cljs - https://medium.com/@sagarjauhari/clojure-postgres-on-docker-24ad5832803d
