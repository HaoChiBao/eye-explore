from flask import Flask, request, jsonify
from playsound import playsound
from flask_cors import CORS
from config import COHERE_API_KEY, CHAT_GPT_API_KEY, ESTUARY_API_KEY
from google.cloud import speech
import io
from gtts import gTTS
import os
import cohere
import openai as ai
from requests import request
import json

app = Flask(__name__)
CORS(app)
os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = 'googleSpeechToText.json'


@app.route('/tts', methods=["POST"])
def textToSpeech():
    co = cohere.Client(COHERE_API_KEY)
    prompt = request.form.get("predictions")
    displayObject = "{}, {}, {}".format(prompt.split(",")[0], prompt.split(",")[1], prompt.split(",")[2])
    finalPrompt = "Write me a description of the following object: " + displayObject

    response = co.generate(
        model='medium',
        prompt=finalPrompt,
        max_tokens=7,
        temperature=0.7,
    )
    print(response[0])
    # chatgpt transformer
    ai.api_key = CHAT_GPT_API_KEY

    completions = ai.Completion.create(
        engine='text-davinci-003',  # Determines the quality, speed, and cost.
        temperature=0.5,  # Level of creativity in the response
        prompt="Create a 15 word description of the following prompt: " + response[0],  # What the user
        # typed in
        max_tokens=100,  # Maximum tokens in the prompt AND response
        n=1,  # The number of completions to generate
        stop=None,  # An optional setting to control response generation
    )
    print(completions.choices[0].text)

    # text to speech
    mySpeechFile = gTTS(text=completions.choices[0].text, lang="en", slow=False)
    mySpeechFile.save("speech.mp3")
    playsound("speech.mp3")

    return jsonify({}), 200


@app.route('/upload', methods=['POST'])
def upload():
    file = request.form.get("audio_file")

    # Do the Google Shit
    client = speech.SpeechClient()

    with io.open(file, "rb") as audio_file:
        content = audio_file.read()
        audio = speech.RecognitionAudio(content=content)

    googleConfig = speech.RecognitionConfig(
        encoding=speech.RecognitionConfig.AudioEncoding.LINEAR16,
        enable_automatic_punctuation=True,
        audio_channel_count=2,
        language_code="en-US",
    )

    response = client.recognize(
        request={"config": googleConfig, "audio": audio})

    translatedResponses = []

    # Reads the response
    for result in response.results:
        translatedResponses.append("Transcript: {}".format(
            result.alternatives[0].transcript))

    return jsonify(translatedResponses), 200


@app.route("/getImage/<imageName>", methods=["GET"])
def getImage(imageName):
    with open("cid.json") as file:
        cid = json.load(file)[imageName]
        # get = request("GET", "api.estuary.tech/gw/ipfs/" + cid)

    return {"cid": "https://api.estuary.tech/gw/ipfs/{}".format(cid)}, 200


@app.route("/postImage/<imageName>/<filePath>", methods=["POST"])
def postImage(imageName, filePath):
    print(os.getcwd())
    payload = {
        "filename": imageName
    }

    files = [
        ('data', ('file', open(filePath, 'rb'), 'application/octet-stream'))
    ]

    headers = {
        'Accept': 'application/json',
        'Authorization': "Bearer " + ESTUARY_API_KEY
    }

    for i in range(5):
        response = request("POST", "https://api.estuary.tech/content/add", headers=headers, data=payload, files=files)
        print(response.status_code)
        status = response.status_code
        if status == 200:
            break
        if i == 4:
            return -1

    print(response.text)
    print(response)

    with open("cid.json") as file:
        JSONfile = json.load(file)

        JSONfile[imageName] = json.loads(response.text)["cid"]

    with open("cid.json", "w") as file2:
        json.dump(JSONfile, file2)
        os.remove(filePath)

    return response.text, 200


if __name__ == "__main__":
    app.run(host="localhost", port=3000, debug=True)
