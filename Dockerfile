FROM clojure
WORKDIR /usr/src/app
RUN ["apt-get", "update"]
RUN ["apt-get", "install", "-y", "vim"]
RUN ["apt-get", "install", "-y", "tree"]
RUN ["cp", "vimrc", "$HOME/.vimrc"]
COPY . /usr/src/app
