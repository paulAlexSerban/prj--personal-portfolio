#!/bin/bash 
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

source ../../config/config.common.env
source ../mom.env

export PARENT_MODULE_NAME="${PROJECT_NAME} / ${MODULE_NAME}"

echo -e "$GREEN [ info ] $NC $PARENT_MODULE_NAME $BLUE LINTING... $NC"

 lint() {
    for t in ${INSTALL_PROJECT_MODULES[@]}; do
        if [ -f ../"$t"/scripts/lint.bash ]; then
            START_TIME=$(date +%s)
            bash ../"$t"/scripts/lint.bash
            END_TIME=$(date +%s)
            TIME_TAKEN=$((END_TIME - START_TIME))
            # echo -e "$GREEN [ info ] $NC Built $BLUE $PARENT_MODULE_NAME / "$t" $NC in $GREEN $TIME_TAKEN $NC seconds"
        fi
    done
}

lint

export PARENT_MODULE_NAME="${PROJECT_NAME} / ${MODULE_NAME}"

echo -e "$GREEN [ info ] $NC $PARENT_MODULE_NAME $GREEN SUCCESS $NC"
