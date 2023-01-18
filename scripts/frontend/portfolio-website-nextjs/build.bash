#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

if [ -d "../../../frontend/portfolio-website-nextjs/public/assets" ]; then
    rm -rfv ../../../frontend/portfolio-website-nextjs/public/assets/*
    rsync --progress -auv ../../../assets/dist ../../../frontend/portfolio-website-nextjs/public/assets/
else
    mkdir -p ../../../frontend/portfolio-website-nextjs/public/assets
    rsync --progress -auv ../../../assets/dist ../../../frontend/portfolio-website-nextjs/public/assets/
fi

npm --prefix ../../../frontend/portfolio-website-nextjs run build