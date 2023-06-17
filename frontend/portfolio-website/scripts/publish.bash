#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

source ../.env

bash 
bash build.bash
bash package.bash

# Get current git branch
GIT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
echo "Current branch: $GIT_BRANCH"

# List of target AWS S3 buckets
aws s3 ls

# Based on git branch, set TARGET_HOST
case $GIT_BRANCH in
  develop)
    TARGET_HOST=("develop.paulserban.eu")
    ;;
  release)
    TARGET_HOST=("stage.paulserban.eu")
    ;;
  main)
    TARGET_HOST=("paulserban.eu" "www.paulserban.eu")
    ;;
  *)
    echo "Unknown branch. Can't set TARGET_HOST."
    ;;
esac

# Print the target hosts
for i in "${TARGET_HOST[@]}"; do
  echo Target host/bucket: $i
  ls -la ../../../package/$REPOSITORY_NAME
  aws s3 sync ../../../package/$REPOSITORY_NAME s3://$i --delete
done
