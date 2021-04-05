import sys
from flask import Flask
from flask import jsonify
from flask import request
from db_util import db_connect, chk_conn

app = Flask(__name__)
dbPath = None

@app.route('/hh/user')
def getTestUser():
    return jsonify(testUser='test')


@app.route('/hh/note', methods=["POST"])
def addNewNote():
    req_data = request.get_json()
    userId = req_data['userId']
    note = req_data['note']
    
    if userId is None or note is None:
        return createResponse(None, "Invalid Create Note request")

    con = connectDb()
    cur = con.cursor()

    add_note_sql = "INSERT INTO note (userId, note) VALUES (?, ?)"
    cur.execute(add_note_sql, (userId, note))
    rowId = cur.lastrowid

    con.commit()
    return createResponse({"newRowId": rowId })

@app.route('/hh/note/update', methods=["POST"])
def updateNote():
    req_data = request.get_json()
    noteId = req_data['noteId']
    note = req_data['note']

    if noteId is None:
        return createResponse(None, "Invalid Note ID: "+ str(noteId))

    con = connectDb()
    cur = con.cursor()

    update_note_sql = "UPDATE note SET note=? WHERE id=?"
    cur.execute(update_note_sql, (note, noteId))

    con.commit()

    return createResponse("Row Updated: ID=" + str(noteId))


@app.route('/hh/note', methods=["GET"])
def getNotes():
    userId = request.args.get('user')

    if userId is None:
        return createResponse(None, "User Not found: ID="+str(userId)) 

    con = connectDb()
    cur = con.cursor()
    get_notes_sql = "SELECT * FROM note WHERE userId=?"
    cur.execute(get_notes_sql, (userId,))

    notes = []

    for row in cur.fetchall():
        note = {
            'id' : row[0],
            'note' : row[2]
            }
        notes.append(note)

    return createResponse(notes)

@app.route('/hh/note/delete', methods=["GET"])
def deleteNote():
    noteId = request.args.get('id')
    
    if noteId is None:
        return createResponse(None, "Note not found: ID="+ str(noteId))

    print("Deleting Note ID=" + noteId)
    con = connectDb()
    cur = con.cursor()
    delete_note_sql = "DELETE FROM note WHERE id=?"
    cur.execute(delete_note_sql, (noteId,))

    con.commit()

    return createResponse("Deleted note" + str(noteId))
    
def createResponse(data, error=None):
    response = {
                "data": data,
                "error": error
                }
    return jsonify(response)

def connectDb():
    return db_connect(dbPath)


if __name__ == '__main__':
    if len(sys.argv) > 1:
        dbPath = sys.argv[1]
        if chk_conn(dbPath):
            print("DB Connection Successful")
        else:
            print("DB Connection Failed")
          
    app.run(host='0.0.0.0', port=5000)
