#!/bin/bash
# Script to replace sensitive data in package.json

# Replace the sensitive URL with the clean version
sed -i 's|git+https://cosmosclassroom:ghp_[^@]*@github.com/cosmosclassroom/cosmosintheclassroom.git|git+https://github.com/cosmosclassroom/cosmosintheclassroom.git|g' package.json
