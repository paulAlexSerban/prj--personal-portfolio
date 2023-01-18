#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

echo "📦  Package Frontend NextJS"
mkdir -p ../../package/portfolio-website
cp -rfv ../../frontend/portfolio-website-nextjs/out/* ../../package/portfolio-website-nextjs