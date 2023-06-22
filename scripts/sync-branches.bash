#!/bin/bash

### PRODUCTION / env: PRODUCTION
echo "Checkout ot PRODUCTION branch"
git checkout production

echo "Pull changes on PRODUCTION branch"
git pull

### MAIN / env: STAGE
echo "Checkout ot MAIN branch"
git checkout main

echo "Pull changes on MAIN branch"
git pull

echo "Merge PRODUCTION branch in MAIN branch"
git merge production

echo "Push synchronized MAIN branch to remote repository"
git push

### RELEASE / env: TEST
echo "Checkout RELEASE branch"
git checkout release

echo "Merge main branch in RELEASE branch"
git merge main

echo "Push synchronized RELEASE branch to remote repository"
git push

### DEVELOP / env: DEVELOP
echo "Checkout DEVELOP branch"
git checkout develop

echo "Merge MAIN branch in DEVELOP branch"
git merge main

echo "Push synchronized DEVELOP branch to remote repository"
git push
