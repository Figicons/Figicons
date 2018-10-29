#!/bin/bash
#
# Build Figicons

function DELETE_TEMP {
    rm -rf svgs
    rm ./figicons.json
    touch ./figicons.json
    mkdir svgs
    echo "Recreated temp files."
}

function BUILD_ICONS {
    echo "Fetching icons..."
    npm run fetch
    echo "Cleaning icons..."
    npm run clean
    echo "Parsing icons..."
    npm run parse
    echo "Icons built."
}

function RUN_TESTS {
    npm test
}

DELETE_TEMP
BUILD_ICONS
echo "Fetching & parsing completed."