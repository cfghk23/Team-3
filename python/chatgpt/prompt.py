import openai
import json

openai.api_type = "azure"
openai.api_base = "https://hkust.azure-api.net"
openai.api_version = "2023-05-15"
openai.api_key = "d2013e1"

prompt_sentence = """generate 5 questions for me regarding the topic of %s for %s level, 
give me the result in the format of json string like for json parse:
[
    {
        "id": 1,
        "text": question1,
        "options": {
            "A": choiceA,
            "B": choiceB,
            "C": choiceC,
            "D": choiceD
        },
        "correct": "C"
    },
    {
        "id": 1,
        "text": question1,
        "options": {
            "A": choiceA,
            "B": choiceB,
            "C": choiceC,
            "D": choiceD
        },
        "correct": "C"
    },
]
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
                        "id": 1,
                        "text": question1,
                        "options": {
                            "A": choiceA,
                            "B": choiceB,
                            "C": choiceC,
                            "D": choiceD
                        },
                        "correct": "C"
                    },
                    {
                        "id": 1,
                        "text": question1,
                        "options": {
                            "A": choiceA,
                            "B": choiceB,
                            "C": choiceC,
                            "D": choiceD
                        },
                        "correct": "C"
                    }
                ]
                """
            }
        ]
    )
    try:
        resp = response["choices"][0]["message"]["content"].replace("```", "'")
        resp = resp[resp.find("["): resp.rfind("]")+1]
        data = json.loads(resp)
        for question in resp:
            question["type"] = "question"
        print(data)
        print(type(data))
        return data
    except Exception as e:
        print(e)
    return None

if __name__ == '__main__':
    prompt("business", "secondary school")
