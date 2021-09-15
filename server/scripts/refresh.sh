#!/bin/bash
if [ -f .env ]
then
  export $(cat .env | sed 's/#.*//g' | xargs)
else 
    cecho "RED" "FATAL ERROR: .env FILE NOT FOUND!"
    exit
fi

npm install
npm run build
pm2 restart $PM2_PROCESS_NAME