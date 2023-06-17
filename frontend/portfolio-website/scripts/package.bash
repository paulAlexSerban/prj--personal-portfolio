#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

source ../.env

echo -e "📦  Package $FORMATTED_NAME"

## prepare the package folder
mkdir -p ../../../package/$REPOSITORY_NAME

## copy the files to the package folder
cp -rfv ../out/* ../../../package/$REPOSITORY_NAME
cp -rfv ../public/* ../../../package/$REPOSITORY_NAME

## create a .nojekyll file
touch ../../../package/$REPOSITORY_NAME/.nojekyll
echo -e "$GREEN [ info ] $NC .nojekyll created and added. $NC"

## create a CNAME file
echo "Create a CNAME file"
touch ../../../package/$REPOSITORY_NAME/CNAME
echo $DOMAIN > ../../../package/$REPOSITORY_NAME/CNAME
