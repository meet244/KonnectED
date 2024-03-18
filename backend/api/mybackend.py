from flask import Flask, request, jsonify, redirect
from pymongo import MongoClient
from flask_cors import CORS
import uuid

app = Flask(__name__)
CORS(app)

# MongoDB connection settings
MONGO_URI = "mongodb+srv://user_server:F1uFliOqi4KXweiL@cluster0.ed2nsfi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

# Connect to MongoDB
client = MongoClient(MONGO_URI)
db = client["mydb"]
coll = db["users"]

@app.route("/", methods=["GET"])
def home():
    return redirect("https://konnect-ed.netlify.app/")

@app.route("/create", methods=["POST"])
def create_user():
    user_data = {
        "_id": uuid.uuid4().hex,
        "name": request.form.get("name"),
        "subtitle": "Web Developer at Google",
        "quote": "I'd love to change the world, but they won't give me the source code.",
        "posts_count": 0,
        "followers_count": 0,
        "koins_count": 0,
        "about": "I am a web developer at Google. I've worked as a full stack developer for more than 5 years. I love to work on new projects and learn new things.",
        "born": "October 20, 1990",
        "experience": [
            {
                "company": "Apple Computer, Inc.",
                "duration": "May 2015 – Present",
                "employment_duration": "8 mos"
            },
            {
                "company": "Microsoft Corporation",
                "duration": "May 2017 – Present",
                "employment_duration": "1 yrs 5 mos"
            },
            {
                "company": "Tata Consultancy Services.",
                "duration": "May 2022 – Present",
                "employment_duration": "6 yrs 10 mos"
            }
        ],
        "email": request.form.get("email"),
        "history": [],
        "videos": [],
    }
    coll.insert_one(user_data)
    return "User created successfully!"

@app.route("/read1", methods=["GET"])
def read_user():
    user = coll.find_one({"_id": "6e252ad765964db497826e4a3dff19f8"})
    return jsonify(user)

@app.route("/user/<user_id>", methods=["GET"])
def get_user(user_id):
    user = coll.find_one({"_id": user_id})
    return jsonify(user)

@app.route("/update/<user_id>", methods=["PUT"])
def update_user(user_id):
    coll.update_one({"_id": user_id}, {"$set": request.json})
    return "User updated successfully!"




if __name__ == "__main__":
    app.run()