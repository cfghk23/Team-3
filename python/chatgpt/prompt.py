import openai
import json
import os

# hide api  key using environment variable
from dotenv import load_dotenv
load_dotenv()

openai.api_type = "azure"
openai.api_base = "https://hkust.azure-api.net"
openai.api_version = "2023-05-15"
openai.api_key = os.environ.get("OPENAI_API_KEY")

prompt_sentence = """generate 5 questions for me regarding the topic of %s for %s level, 
give me the result in the format of json string like for json parse:
[{
    'question': question,
    'choices': ['A. xxx', ... 'D. xxx'],
    'answer': answer
},
{
xxx
}]
"""

def prompt(topic, level):
    response = openai.ChatCompletion.create(
        engine="gpt-35-turbo",
        messages=[
            {"role": "system", "content": "You are a helpful teacher."},
            {"role": "user", "content": prompt_sentence % (topic, level)},
            {"role": "assistant", "content":
                """
                give the example in the format a list of json:
                [
                    {
                        “question”: question1,
                        “choices”: ['A. choiceA', ... 'D. choiceD'],
                        “ans”: 'A. xxx'
                    },
                    {
                        "question": question2,
                        "choices": ['A. choiceA', ... 'D. choiceD'],
                        "ans": 'A. xxx'
                    }
                ]
                """
            }
        ]
    )
    try:
        resp = response["choices"][0]["message"]["content"].replace("```", "'")
        resp = resp[resp.find("["): resp.rfind("]")+1]
        print(resp)
        data = json.loads(resp)
        print(data)
        print(type(data))
        return data
    except Exception as e:
        print(e)
    return None

if __name__ == '__main__':
    prompt("business", "secondary school")
