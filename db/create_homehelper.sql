PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE note(id INTEGER PRIMARY KEY AUTOINCREMENT, userId INTEGER, note TEXT);
CREATE TABLE user(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT);
COMMIT;

