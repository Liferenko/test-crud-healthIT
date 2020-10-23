FROM clojure
WORKDIR /usr/src/app
RUN ["apt-get", "update"]
RUN ["apt-get", "install", "-y", "vim"]
RUN ["apt-get", "install", "-y", "tree"]
COPY . /usr/src/app
RUN ["mv", ".vimrc", "//root/.vimrc"]
EXPOSE 8080
