#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

source ../.env.development

echo 'Running integration tests...'
echo 'Error: Integration tests are not implemented yet.'
