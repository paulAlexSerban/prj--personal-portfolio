#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

source ../.env
source ../.env.development

export GA_MEASUREMENT_ID && export SITE_URL && npm --prefix .. run develop
