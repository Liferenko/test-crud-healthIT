#!/bin/bash

# CLJ
sudo apt-get update -y
sudo apt-get install -y leiningen


# DB
sudo apt install -y postgresql postgresql-contrib
sudo -u postgres createuser --interactive
sudo -u postgres createdb tiny-cliniq
sudo adduser tiny-dev
sudo -i -u tiny-dev
pg_restore -f ../ubuntu/test-crud-healthIT/db_dump.sql 
