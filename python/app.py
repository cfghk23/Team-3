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
    message = request.json["message"]
    resp = prompt(message)
    if resp:
        return result(200, "success", resp)
    return result(400, "failed in generating question")

if __name__ == '__main__':
    app.run(port=5111)
