
#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

source ../.env

echo 'This script is not yet implemented.'

echo 'this scrupt should publish the content .mdx files from the local content folder to AWS S3.'

echo 'warning this script will override the content folder on AWS S3.'