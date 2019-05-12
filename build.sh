#!/bin/bash
#
# Build Figicons
#
# Optimize and build icons:
# ./build.sh publish
#
# Optimize, build icons and create Figicons:
# ./build.sh


function DELETE_TEMP {
    rm -rf ./dist
    mkdir dist
}

function BUILD {
    yarn build
}

function PUBLISH {
    yarn publish
}

function COPY {
    cd dist/src
    mv * ../
    cd ../
    rm -rf dist/src
}

function CLEAN {
    rm -rf dist
}

if [[ $1 == "publish" ]]; then
DELETE_TEMP
BUILD
COPY
PUBLISH
CLEAN
echo -e "Build & publish completed."
elif [ $# -eq 0 ]; then
DELETE_TEMP
BUILD
echo -e "Build completed."
fi