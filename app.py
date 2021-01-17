import os
from flask import Flask
from flask import jsonify
from flask import request
from flask import render_template
from flask import send_from_directory
from flask_pymongo import PyMongo
import json


app = Flask(__name__)

app.config['MONGO_DBNAME'] = 'restdb'
app.config['MONGO_URI'] = 'mongodb://localhost:27017/restdb'

mongo = PyMongo(app)

@app.route('/', methods=['GET'])
def get_all_stars():

    return render_template("index.html")

@app.route('/favicon.ico') 
def favicon(): 
    return send_from_directory(os.path.join(app.root_path, 'static'), 'favicon.ico', mimetype='image/vnd.microsoft.icon')


@app.route('/data/', methods=['POST'])
def add_star():
    idatadb = mongo.db.idatadbra
    req_data = request.form
    # print(req_data)
    idatadb.insert_one({'a':req_data['a'], 'b':req_data['b'], 'c':req_data['c'], 'd':req_data['d'], 'e':req_data['e'], 'f':req_data['f'], 'g':req_data['g'], 'h':req_data['h'], 'i':req_data['i']})
    return render_template("index_hogaya.html")
#     return "<h1></h1>"

if __name__ == '__main__':
    app.run(host="0.0.0.0")