#!/bin/bash

# first make sure dist is on the development branch
cd dist
git checkout development
cd ..

# copy paste
find . -type f ! -name '*.md' -delete
cp -v test/* dist/