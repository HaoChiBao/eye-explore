from flask import Flask, request, jsonify
from playsound import playsound
from flask_cors import CORS
from config import COHERE_API_KEY, CHAT_GPT_API_KEY
from google.cloud import speech
import io
from gtts import gTTS
import os
import cohere
import openai as ai

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


@app.route("/getImage/<imageID>", methods=["GET"])
def getImage():
    return


@app.route("/postImage/<imageID>", methods=["POST"])
def postImage():
    return jsonify({}), 200


if __name__ == "__main__":
    app.run(host="localhost", port=3000, debug=True)
