from google.cloud import speech
from moviepy.audio.io.AudioFileClip import AudioFileClip
import os
import io


# Setting Up JSON Credentials
os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = 'googleSpeechToText.json'


class Translator:
    def __init__(self, paths):
        self.paths = paths
        self.client = speech.SpeechClient()

    def convertToWAV(self):
        for i in range(len(self.paths)):
            file = self.paths[i]
            ext = file[-4:]

            if ext != ".wav":
                newFilePath = file[:-4] + ".wav"
                clip = AudioFileClip(file)
                clip.write_audiofile(newFilePath)

                clip.close()
                os.remove(file)

                self.paths[i] = file[-4] + ".wav"

    def convertToText(self):
        self.convertToWAV()

        for file in self.paths:
            with io.open(file, "rb") as audio_file:
                content = audio_file.read()
                audio = speech.RecognitionAudio(content=content)

            googleConfig = speech.RecognitionConfig(
                encoding=speech.RecognitionConfig.AudioEncoding.LINEAR16,
                enable_automatic_punctuation=True,
                audio_channel_count=2,
                language_code="en-US",
            )

        # Sends the request to google to transcribe the audio
        response = self.client.recognize(
            request={"config": googleConfig, "audio": audio})

        translatedResponses = []
        # Reads the response
        for result in response.results:
            translatedResponses.append("Transcript: {}".format(
                result.alternatives[0].transcript))

        return translatedResponses


if __name__ == "__main__":
    t = Translator(["University of Toronto.wav"])
    print(t.convertToText())
