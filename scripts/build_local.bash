#!/bin/bash 
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

START_TIME=$(date +%s)
. ../config/config.common.env

export NC
export RED
export GREEN
export BLUE

if [ "$1" = "dev" ]; then
    . ../config/config.development.env
fi

export PROJECT_NAME

build_local() {
    for t in "${INSTALL_PROJECT_MODULES[@]}"; do
        if [ -f ../"$t"/scripts/build_local.bash ]; then
            START_TIME=$(date +%s)
            bash ../"$t"/scripts/build_local.bash
            END_TIME=$(date +%s)
            TIME_TAKEN=$((END_TIME - START_TIME))
            echo -e "$GREEN [ info ] $NC Built $BLUE $PROJECT_NAME / $t $NC in $GREEN $TIME_TAKEN $NC seconds"
        fi
    done
}

build_local

END_TIME=$(date +%s)
TIME_TAKEN=$((END_TIME - START_TIME))
echo -e "$GREEN [ info ] $NC Built $BLUE $PROJECT_NAME $NC in $GREEN $TIME_TAKEN $NC seconds"