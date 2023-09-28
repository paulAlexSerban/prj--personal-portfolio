#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

source ../.env.development

# Colors for printing messages
NC='\033[0m' # No Color
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'

print_info() {
  echo -e "${GREEN} [ info ] ${NC}" "$1"
}

function pullS3Assets() {
  print_info "Pulling assets from AWS S3 bucket to ./public folder"
  node ../aws/pull-assets.js
}

function cleanDistFolder() {
  echo "Cleaning ../public folder"
  rm -rfv ../public/*
  mkdir -p ../public
}

cleanDistFolder
pullS3Assets