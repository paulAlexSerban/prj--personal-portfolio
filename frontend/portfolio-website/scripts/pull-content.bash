#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

source ../.env.development

echo 'This script is not yet implemented.'

echo 'this scrupt should pull the content .mdx files from AWS S3 to the local content folder.'

echo 'warning this script will override the local content folder.'