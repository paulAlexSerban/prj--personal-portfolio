#!/bin/bash

# Set the paths
ASSETS_FOLDER=../../../frontend/portfolio-website-nextjs/public/assets
DIST_FOLDER=../../../assets/dist
APP_FOLDER=../../../frontend/portfolio-website-nextjs

# Change to the script directory
cd "$(dirname "$0")" || exit

if [ -d $ASSETS_FOLDER ]; then
    echo "Remove existing assets"
    rm -rfv $ASSETS_FOLDER/*
    echo "Copy new assets"
    rsync --progress -auv $DIST_FOLDER/* $ASSETS_FOLDER/
else
    echo "Create new ./assets directory"
    mkdir -p $ASSETS_FOLDER
    echo "Copy new assets"
    rsync --progress -auv $DIST_FOLDER/* $ASSETS_FOLDER/
fi

# set base path
echo "Set the base path to $BASE_PATH"

echo "Build the app"
npm --prefix $APP_FOLDER run build:local

echo "Create a .nojekyll file"
touch $APP_FOLDER/out/.nojekyll

echo "Create a CNAME file"
echo 'https://paulalexserban.github.io/' > $APP_FOLDER/out/CNAME
