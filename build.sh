#!/bin/bash
#
# Build Figicons
#
# Optimize and build icons:
# ./build.sh release
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

function RELEASE {
    yarn release
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

if [[ $1 == "release" ]]; then
DELETE_TEMP
BUILD
COPY
RELEASE
CLEAN
echo -e "Build & release completed."
elif [ $# -eq 0 ]; then
DELETE_TEMP
BUILD
echo -e "Build completed."
fi