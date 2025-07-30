from flask import Flask, render_template, request, jsonify
import speech_recognition as sr
from gtts import gTTS
import uuid
import os

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/speech-to-text')
def speech_to_text():
    recognizer = sr.Recognizer()
    with sr.Microphone() as source:
        recognizer.adjust_for_ambient_noise(source, duration=1)
        try:
            audio = recognizer.listen(source, timeout=10, phrase_time_limit=60)
            text = recognizer.recognize_google(audio)
            return jsonify({'status': 'success', 'text': text})
        except sr.UnknownValueError:
            return jsonify({'status': 'error', 'message': 'Could not understand audio'})
        except sr.RequestError:
            return jsonify({'status': 'error', 'message': 'Google API error'})
        except sr.WaitTimeoutError:
            return jsonify({'status': 'error', 'message': 'No speech detected'})

@app.route('/api/text-to-speech', methods=['POST'])
def text_to_speech():
    data = request.json
    input_text = data.get("text")
    if not input_text:
        return jsonify({'status': 'error', 'message': 'Text is empty'})

    filename = f"{uuid.uuid4().hex}.mp3"
    tts = gTTS(text=input_text, lang='en')
    tts.save(f"static/{filename}")

    return jsonify({'status': 'success', 'audio': f'/static/{filename}'})

if __name__ == '__main__':
    app.run(debug=True)



