from flask import Flask
from flask import Flask
from flask_cors import CORS, cross_origin
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

app = Flask(__name__)

@app.route("/")
@cross_origin()
def hello_world():
    return "<p>Hello, World!</p>"