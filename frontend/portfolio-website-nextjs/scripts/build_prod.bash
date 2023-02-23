#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

source ../config.env

export NODE_ENV=production
# export BASE_PATH='/prj--personal-portfolio'
npm --prefix .. run build
