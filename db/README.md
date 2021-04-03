How to create homehelper database

1. If you do not have sqlite3 installed, install using:
	sudo apt install sqlite3

2. Make the create script executable:
	chmod 755 create.sh

3. Exectute the script (database will be created in this folder):
	./create.sh

4. Test that the database setup exists:
	sqlite3 homehelper.db
	sqlite3>> .tables

5. You should see a list of tables, including note and user
