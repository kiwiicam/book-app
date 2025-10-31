from flask import jsonify, request
import boto3
from dotenv import load_dotenv
import os
import hmac
import hashlib
import base64

load_dotenv()

client_secret = os.getenv("CLIENT_SECRET")
client_id = os.getenv("CLIENT_ID")
aws_region = os.getenv("AWS_REGION")

client = boto3.client("cognito-idp", region_name=aws_region)

def get_secret_hash(email):
    message = email + client_id
    dig = hmac.new(str(client_secret).encode('utf-8'), 
                   msg=message.encode('utf-8'), 
                   digestmod=hashlib.sha256).digest()
    return base64.b64encode(dig).decode()

def sign_up():
    try:
        data = request.get_json()
        email = data.get('email')
        password = data.get('password')
        username = data.get('username')
        secret_hash = get_secret_hash(email)

        response = client.sign_up(
            ClientId=client_id,
            Username=email,
            Password=password,
            SecretHash=secret_hash
        )
        
        return jsonify({"verify": True}), 200
    except Exception as e:
        print("Error in sign_up:", e)
        return jsonify({"error": "Internal server error", "details": str(e), "verify": False}), 500
