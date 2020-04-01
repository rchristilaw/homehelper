from flask import Flask
from flask import jsonify
from flask import request
from db_util import db_connect

app = Flask(__name__)

@app.route('/user')
def getTestUser():
    return jsonify(testUser='test')


@app.route('/note/add', methods=["POST"])
def addNewNot():
    userId = request.form['userId']
    note = request.form['note']
    
    if userId is None or note is None:
        return ""

    con = db_connect()
    cur = con.cursor()
    add_note_sql = "INSERT INTO note (userId, note) VALUES (?, ?)"
    cur.execute(add_note_sql, (userId, note))
    rowId = cur.lastrowid

    con.commit()
    return str(rowId)

@app.route('/note/get', methods=["GET"])
def getNotes():
    userId = request.args.get('user')
    con = db_connect()
    cur = con.cursor()
    print(userId)
    get_notes_sql = "SELECT * FROM note WHERE userId=?"
    cur.execute(get_notes_sql, userId)

    notes = []

    for row in cur.fetchall():
        note = {
            'id' : row[0],
            'note' : row[2]
            }
        notes.append(note)

    return jsonify(notes)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
