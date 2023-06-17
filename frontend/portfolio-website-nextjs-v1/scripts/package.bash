#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

source ../config.env

echo -e "📦  Package Frontend NextJS"
mkdir -p ../../../package/portfolio-website-nextjs
cp -rfv ../out/* ../../../package/portfolio-website-nextjs
cp -rfv ../public/* ../../../package/portfolio-website-nextjs
touch ../../../package/portfolio-website-nextjs/.nojekyll
echo -e "$GREEN [ info ] $NC .nojekyll created and added. $NC"
echo "Create a CNAME file"
echo 'https://paulalexserban.github.io/' > ../../../package/portfolio-website-nextjs/CNAME
