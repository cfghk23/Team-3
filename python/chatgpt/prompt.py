import openai
import json

openai.api_type = "azure"
openai.api_base = "https://hkust.azure-api.net"
openai.api_version = "2023-05-15"
openai.api_key = "d2013e1"

prompt_sentence = """generate 10 questions for me regarding the topic of %s for %s level, 
give me the result in the format of json string like for json parse:
[{
    'question': question,
    'choices': ['A. xxx', ... 'D. xxx'],
    'answer': answer
},
{
xxx
}],
do not include other response apart from the json string
"""

def prompt(topic, level):
    response = openai.ChatCompletion.create(
        engine="gpt-35-turbo",
        messages=[
            {"role": "system", "content": "You are a helpful teacher."},
            {"role": "user", "content": prompt_sentence % (topic, level)},
            {"role": "assistant", "content": ""}
        ]
    )
    try:
        resp = response["choices"][0]["message"]["content"].replace("json", ""). replace("```", "'").replace("\n", "")
        print(resp)
        data = json.loads(resp)
        print(type(data))
        return data
    except Exception as e:
        print(e)
    return None
