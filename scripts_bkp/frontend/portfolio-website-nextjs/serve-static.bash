#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

cd ../../../frontend/portfolio-website-nextjs/out && python -m SimpleHTTPServer 9000 