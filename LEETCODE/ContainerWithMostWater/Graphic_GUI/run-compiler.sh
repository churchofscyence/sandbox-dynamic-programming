#!/bin/bash

: '
Notes:
1) You should run chmod -R 777 to give the permissions to the run.sh script.
2) To execute the script run "./run.sh" .
'

echo "Cleaning files..."
rm -r dist/*
rm -r lib/*

echo "Running Gulp..."
gulp

echo "Running Type Script Compiler..."
tsc -w




