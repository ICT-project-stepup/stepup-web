#!/bin/bash
REPOSITORY=/home/ubuntu/react

cd $REPOSITORY

sudo yarn install

sudo npx pm2 reload all