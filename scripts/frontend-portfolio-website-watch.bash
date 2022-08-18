#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

echo "👀  Watching Frontend Portflio Website"
export NODE_ENV="watch"
npm --prefix ../frontend/portfolio-website run watch
