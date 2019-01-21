#!/bin/bash

find . -type f ! -name '*.md' -delete
cp -v test/* dist/