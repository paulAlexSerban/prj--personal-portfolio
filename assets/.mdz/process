#!/bin/bash 
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

source ../.env

echo "🛑  Cleaning assets/dist ..."
rm -rfv ../dist/*

echo "🔧  Procesing assets/source ..."
npm --prefix .. run process