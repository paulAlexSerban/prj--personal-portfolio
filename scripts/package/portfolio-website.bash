#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

echo "📦  Package Frontend NextJS"
mkdir -p ../../package/portfolio-website-nextjs
cp -rfv ../../frontend/portfolio-website-nextjs/out/* ../../package/portfolio-website-nextjs

echo "[info] creating .nojekyll"
touch ../../package/portfolio-website-nextjs/.nojekyll
echo "[info] .nojekyll created."
