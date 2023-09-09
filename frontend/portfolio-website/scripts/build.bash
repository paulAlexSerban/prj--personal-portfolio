#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

source ../.env
source ../.env.development

# Colors for printing messages
NC='\033[0m' # No Color
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'

print_info() {
  echo -e "${GREEN} [ info ] ${NC}" "$1"
}

print_info 'Building... - should copy assets from ./assets/dist to public'

print_info 'Git Branch: ' $GIT_BRANCH

function pullS3Content() {
  print_info "Pulling content from prod AWS S3 bucket to  ./content/prod folder, set cache TTL to 24h"
  node ../aws/pull-prod-content.js
}

function cleanDistFolder() {
  print_info "Cleaning ./content/dist folder"
  rm -rfv ../content/dist/*
  mkdir -p ../content/dist
}

if [[ "$GIT_BRANCH" == production* || "$GIT_BRANCH" = "main" ]]; then
  print_info "Building for $GIT_BRANCH"
  pullS3Content
  cleanDistFolder
  print_info "Copying content from ./content/prod to ./content/dist"
  cp -rfv ../content/prod/* ../content/dist/

else
  print_info 'Building preview for development'
  cleanDistFolder
  print_info "Copying content from ./content/test to ./content/dist"
  cp -rfv ../content/test/* ../content/dist/
fi

export GA_MEASUREMENT_ID && export SITE_URL && npm --prefix .. run build
