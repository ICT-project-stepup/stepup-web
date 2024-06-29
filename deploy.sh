#!/bin/bash
REPOSITORY=/home/ubuntu/react

echo "> run client project"
cd $REPOSITORY

echo "> pm2 kill"
pm2 kill

echo "> npm build"
npm install
npm run build

echo "> pm2 build"
pm2 serve build/ 3000 --spa