from flask import Flask
from routes.databaseroutes import database_bp
from routes.authenticationroutes import auth_bp

app = Flask(__name__)
app.register_blueprint(database_bp)
app.register_blueprint(auth_bp)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)

