#!/bin/bash 

###############################################################
# Run this script for local dev                               #
###############################################################
# search within all collections for collection.yml file
collections=$(find . -path ./_site -prune -false -o -name collection.yml -type f)
var=$(echo $collections | sed 's/ .\//,.\//g')

env='development'

# jekyll serve
JEKYLL_ENV=$env bundle exec jekyll serve --trace --config _config.yml",$var"