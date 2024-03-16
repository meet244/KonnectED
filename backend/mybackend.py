from flask import Flask
from pymongo import MongoClient
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# MongoDB connection settings
MONGO_URI = "mongodb+srv://user_server:F1uFliOqi4KXweiL@cluster0.ed2nsfi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

DB_NAME = "mydb"

# Connect to MongoDB
client = MongoClient(MONGO_URI)
db = client[DB_NAME]

# Define your Flask routes and functions here

if __name__ == "__main__":
    app.run()
