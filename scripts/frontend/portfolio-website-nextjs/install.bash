#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

echo "🛑  Cleaning Frontend Portfolio Website node_modules"
rm -rfv ../../../frontend/portfolio-website-nextjs/node_modules
echo "🔧  Installing Frontend Portfolio Website"
npm --prefix ../../../frontend/portfolio-website-nextjs install
