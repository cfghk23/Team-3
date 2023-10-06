import os

db_path = "sqlite:///" + os.path.join(os.path.dirname(__file__), "sqlite3.db")

def result(code: int, message: str, data: any = None):
    return {
        "code": code,
        "data": data,
        "message": message
    }
