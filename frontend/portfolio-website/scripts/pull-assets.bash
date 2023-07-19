#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

source ../.env.development

function pullS3Assets() {
  echo "Pulling content from prod AWS S3 bucket to  ./content/prod folder, set cache TTL to 24h"
  node ../aws/pull-assets.js
}

function cleanDistFolder() {
  echo "Cleaning ./content/dist folder"
  rm -rfv ../public/*
  mkdir -p ../public
}

cleanDistFolder
pullS3Assets