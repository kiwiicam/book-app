from flask import Blueprint, jsonify
from controllers.authenticationcontroller import sign_up

auth_bp = Blueprint('authentication', __name__, url_prefix='/api/authentication')

@auth_bp.route('/signup', methods=['POST'])
def sign_up_():
    return sign_up();
