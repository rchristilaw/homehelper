import os
import sqlite3

DEFAULT_PATH = '~/db/homehelper.db'

def db_connect(db_path=DEFAULT_PATH):
    con = sqlite3.connect(db_path)
    return con

def chk_conn(db_path=DEFAULT_PATH):
    try:
        print("Trying to connect to: ", db_path)
        con = db_connect(db_path)
        con.cursor()
        return True
    except Exception as ex:
        return False