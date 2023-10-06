import openai
import json

openai.api_type = "azure"
openai.api_base = "https://hkust.azure-api.net"
openai.api_version = "2023-05-15"
openai.api_key = "d2013e1"

prompt_sentence = """

"""

def prompt(message):
    response = openai.ChatCompletion.create(
        engine="gpt-35-turbo",
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": message}
        ]
    )
    try:
        resp = response["choices"][0]["message"]["content"]
        data = json.loads(f'{resp}')
        return data
    except Exception as e:
        print(e)
    return None

if __name__ == '__main__':
    prompt("generate a question regarding the finance and give me 4 answers as well as the correct ans for me, "
           "your response should be in json format, i.e., {'question': question, 'choices': [choice1....choice4], 'correct_ans': ans}")
