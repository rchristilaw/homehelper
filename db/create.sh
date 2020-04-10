#!/bin/bash

# Create homehelper database

echo "Creating homehelper database"
sqlite3 homehelper.db < create_homehelper.sql
