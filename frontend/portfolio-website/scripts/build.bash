#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

source ../.env

echo 'Building... - shou copy assets from ./assets/dist to public'

npm --prefix .. run build
