#!/usr/bin/env bash

#
# Generate App icon from svg
#
which convert > /dev/null
if [ 0 -ne $? ]; then echo -e 'convert not found. Install Image Magick'; exit 1; fi

which optipng > /dev/null
if [ 0 -ne $? ]; then echo -e 'optipng not found. Install optipng (npm install -g optipng)'; exit 1; fi

convert -density 150 -resize 128x128 -background none assets/icon.svg src/images/icon-128.png
convert -density 150 -resize 48x48   -background none assets/icon.svg src/images/icon-48.png
convert -density 150 -resize 16x16   -background none assets/icon.svg src/images/icon-16.png

optipng src/images/*.png
