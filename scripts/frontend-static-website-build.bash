#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

echo "🛑 Cleaning Frontend Static Website"
rm -rfv ../frontend/static-website/dist
echo "🏗️ Building Frontend Static Website "
export NODE_ENV=$1
npm --prefix ../frontend/static-website run build