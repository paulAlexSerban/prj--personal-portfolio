#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

echo "📦  Package Frontend Nginx"
mkdir -p ../package/portfolio-website
cp -rfv ../frontend/portfolio-website/dist/* ../package/portfolio-website