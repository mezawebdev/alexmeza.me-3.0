#!/bin/bash
if [ -f .env ]
then
  export $(cat .env | sed 's/#.*//g' | xargs)
else 
    cecho "RED" "FATAL ERROR: .env FILE NOT FOUND!"
    exit
fi

next start -p $PORT