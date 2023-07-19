#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

source ../.env.development

echo 'Building... - should copy assets from ./assets/dist to public'

echo 'Git Branch: ' $GIT_BRANCH

function pullS3Content() {
  echo "Pulling content from prod AWS S3 bucket to  ./content/prod folder, set cache TTL to 24h"
  node ../aws/pull-prod-content.js
}

function cleanDistFolder() {
  echo "Cleaning ./content/dist folder"
  rm -rfv ../content/dist/*
  mkdir -p ../content/dist
}

if [ "$GIT_BRANCH" = "release" ]; then
  echo 'Building for test'
  cleanDistFolder
  echo "Copying content from ./content/test to ./content/dist"
  cp -rfv ../content/test/* ../content/dist/

elif [ "$GIT_BRANCH" = "main" ]; then
  echo 'Building for stage'
  pullS3Content
  cleanDistFolder
  echo "Copying content from ./content/prod to ./content/dist"
  cp -rfv ../content/prod/* ../content/dist/

elif [ "$GIT_BRANCH" = "production" ]; then
  echo 'Building for production'
  pullS3Content
  cleanDistFolder
  echo "Copying content from ./content/prod to ./content/dist"
  cp -rfv ../content/prod/* ../content/dist/

else
  echo 'Building preview for development'
  cleanDistFolder
  echo "Copying content from ./content/mock to ./content/dist"
  cp -rfv ../content/mock/* ../content/dist/
fi

export SITE_URL && npm --prefix .. run build
