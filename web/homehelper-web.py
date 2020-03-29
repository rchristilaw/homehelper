from flask import Flask
from flask import jsonify

app = Flask(__name__)

@app.route('/user')
def getTestUser():
    return jsonify(testUser='test')


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
