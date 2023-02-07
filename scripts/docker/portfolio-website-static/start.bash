#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

echo "🏗️  BUILD Portfolio Website content"
bash frontend-portfolio-website-build.bash development

echo "🟢  START 🐳  Docker Nginx server conatiner "
docker-compose --env-file ../config.env \
  --file ../../../docker/docker-compose.traefik-proxy.yml \
  --file ../../../docker/docker-compose.portfolio-website-static.yml \
  up --detach --build