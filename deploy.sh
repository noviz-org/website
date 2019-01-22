#!/bin/bash

cd dist/noviz;
git checkout development;
git commit -a;
cd ../sr-website;
git checkout development;
git commit -a;
cd ../..