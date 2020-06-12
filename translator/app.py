import translate
from flask import Flask, request
from flask_restful import Resource, Api
import jsons
import json

app = Flask(__name__)
api = Api(app)

class Translate(Resource):
    def get(self, word, n):
        return jsons.dumps(translate.translate(word,n))

api.add_resource(Translate, '/translate/<word>/<n>')

if __name__ == '__main__':
     app.run()