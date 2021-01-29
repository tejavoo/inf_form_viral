import os
from flask import Flask
from flask import jsonify
from flask import request
from flask import render_template
from flask import send_from_directory
from flask_pymongo import PyMongo
import json


app = Flask(__name__)

# https://hevodata.com/learn/mongoexport-export-mongodb-collections/#:~:text=Mongoexport%20is%20a%20command%2Dline,through%20the%20MongoDB%20Download%20Center.

app.config['MONGO_DBNAME'] = 'restdb'
app.config['MONGO_URI'] = 'mongodb://localhost:27017/restdb'

mongo = PyMongo(app)

@app.route('/', methods=['GET'])
def get_all_stars():

    return render_template("index2.html")

@app.route('/favicon.ico') 
def favicon(): 
    return send_from_directory(os.path.join(app.root_path, 'static'), 'favicon.ico', mimetype='image/vnd.microsoft.icon')


@app.route('/data/', methods=['POST'])
def add_star():
    idatadb = mongo.db.idatadbra
    req_data = request.form
    # print(req_data)
    idatadb.insert_one({'WhoHelpedYouFindThisForm':req_data['a'], 'Name':req_data['b'], 'Email':req_data['c'], 'Address':req_data['d'], 'PhoneNumber':req_data['e'], 'DefineYourself':req_data['f'], 'Followers':req_data['g'], 'InstaUsername':req_data['h'], 'Average_Likes':req_data['i']})
    # return ('', 204)
    return render_template("index_hogaya.html")
#     return "<h1></h1>"

if __name__ == '__main__':
    app.run(host="0.0.0.0")