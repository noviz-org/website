#!/bin/bash

# first make sure dist is on the development branch
cd dist/noviz
pwd
git checkout development
cd ../sr-website
pwd
git checkout development
cd ../..

# clean
echo "Cleaning up dist/noviz"
find dist/noviz/ -type f ! -name '*.md' -delete
echo "Cleaning up dist/sr-website"
find dist/sr-website/ -type f ! -name '*.md' -delete

#copy
cp -v test/noviz/* dist/noviz
cp -v test/sr-website/* dist/sr-website