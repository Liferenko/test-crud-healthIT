FROM clojure
WORKDIR /usr/src/app
RUN ["apt-get", "update"]
RUN ["apt-get", "install", "-y", "make", "nodejs", "npm"]
COPY . /usr/src/app
# RUN ["make", "run"]
EXPOSE 3000
