from flask import Flask

my_awesome_app = Flask(__name__)


@my_awesome_app.route('/')
def hello_world():
    return 'Happy HackRX!'


if __name__ == '__main__':
    my_awesome_app.app()