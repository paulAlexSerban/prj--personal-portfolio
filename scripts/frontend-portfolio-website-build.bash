#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

echo "🛑 Cleaning Frontend Portfolio Website"
rm -rfv ../frontend/portfolio-website/dist
echo "🏗️ Building Frontend Portfolio Website "
export NODE_ENV=$1
npm --prefix ../frontend/portfolio-website run build