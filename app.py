from flask import Flask, abort, current_app, request, jsonify
from flask_cors import CORS
from mimetypes import guess_extension
from werkzeug.utils import secure_filename
from google.cloud import speech
from moviepy.audio.io.AudioFileClip import AudioFileClip
import os
import io

app = Flask(__name__)
CORS(app)
os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = 'googleSpeechToText.json'


@app.route('/description', methods=["POST"])
def generate_description():
    descrip = request.form.get("description")


@app.route('/STT', methods=['POST'])
def speech_to_text():
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


if __name__ == "__main__":
    app.run(host="localhost", port=3000, debug=True)
