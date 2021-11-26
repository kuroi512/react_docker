#!/bin/bash

ROOT_PATH=$(dirname "$0")

echo "$(date)"

#sudo npm install 
#sudo npm start
sudo docker image build -t mionfront . 
