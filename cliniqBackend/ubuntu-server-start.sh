#!/bin/bash

# CLJ
sudo apt-get update -y
sudo apt-get install -y leiningen


# DB
sudo apt install postgresql postgresql-contrib
sudo -u postgres createuser --interactive
sudo -u postgres createdb tiny-cliniq
sudo adduser tiny-dev
