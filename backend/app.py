from flask import Flask
from flask_cors import CORS
from zone.controller.zone_controller import zone_controller

app = Flask(__name__)
CORS(app)

app.register_blueprint(zone_controller)

if __name__ == "__main__":
    app.run(port=5000)