#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

source ../mom.env

echo -e "📦  Package Frontend NextJS"
touch ../out/.nojekyll
echo -e "$GREEN [ info ] $NC .nojekyll created and added. $NC"
echo "Create a CNAME file"
echo 'https://paulalexserban.github.io/' > ../out/CNAME
mkdir -p ../../../package/portfolio-website-nextjs
cp -rfv ../out/* ../../../package/portfolio-website-nextjs
