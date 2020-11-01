#!/bin/bash
sudo yum update -y
sudo amazon-linux-extras install -y docker
sudo service docker start
sudo usermod -a -G docker ec2-user
sudo yum install -y git
git clone https://github.com/Liferenko/test-crud-healthIT.git
cd
cd test-crud-healthIT/cliniqBackend/
cp .vimrc ../../.vimrc
sudo make run
