#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

source ../.env.development

echo 'Building... - shou copy assets from ./assets/dist to public'

echo 'Git Branch: ' $GIT_BRANCH

if [ "$GIT_BRANCH" = "release" ]; then
  echo 'Building for test'
  rm -rfv ../content/dist/*
  cp -rfv ../content/test/* ../content/dist/
elif [ "$GIT_BRANCH" = "main" ]; then
  echo 'Building for stage'
  rm -rfv ../content/dist/*
  echo 'check if prod folder exists and is up to date'
  echo 'if not, fetch from prod AWS S3 bucket to local prod folder, set cache TTL to 24h'
  cp -rfv ../content/prod/* ../content/dist/
else
  echo 'Building preview for development'
  rm -rfv ../content/dist/*
  cp -rfv ../content/mock/* ../content/dist/
fi

npm --prefix .. run build
