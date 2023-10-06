from flask import Flask, request
from chatgpt.prompt import prompt


app = Flask(__name__)

def result(code, message, data = None):
    return {
        "code": code,
        "data": data,
        "message": message
    }

@app.post("/api/prompt")
def generate_question():
    print(request.json)
    topic = request.json["topic"]
    level = request.json["level"]
    resp = prompt(topic, level)
    if resp:
        return result(200, "success", resp)
    return result(400, "failed in generating question")

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000)
