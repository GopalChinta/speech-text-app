# 🔁 Speech ↔ Text Converter

This is a simple Flask web application that converts:

- 🎤 **Speech to Text** using the microphone  
- 🔊 **Text to Speech** using `gTTS` (Google Text-to-Speech)

Built with:
- 🐍 Python (Flask)
- 🎙️ SpeechRecognition
- 🔊 gTTS
- 🖥️ HTML, CSS, JavaScript

---

## ✨ Features

- 🎤 Convert live speech into written text
- 🔊 Read out loud any typed text
- 🌙 Light/Dark theme toggle
- 🗣️ Multi-language ready (future support)
- 💾 Download audio file (from text to speech)
- 🧹 Clear and user-friendly UI

---

## 📸 Screenshots

| Speech to Text | Text to Speech |
|----------------|----------------|
| ![Speech](assets/speech-demo.png) | ![TTS](assets/tts-demo.png) |

---

## 🚀 Run Locally

### 1. Clone the repo

```bash
git clone https://github.com/your-username/speech-text-app.git
cd speech-text-app
2. Install dependencies
bash
Copy
Edit
pip install -r requirements.txt
Or manually:

bash
Copy
Edit
pip install flask speechrecognition gTTS pyaudio
⚠️ On Windows, if pyaudio fails, use:
pip install pipwin && pipwin install pyaudio

3. Run the app
bash
Copy
Edit
python app.py
Visit in browser: http://127.0.0.1:5000

📁 Project Structure
arduino
Copy
Edit
speech-text-app/
│
├── app.py
├── requirements.txt
├── static/
│   ├── style.css
│   └── script.js
├── templates/
│   └── index.html
└── README.md
📦 To Do (Future Enhancements)
 Add Telugu / Hindi speech recognition and TTS

 Store transcript history

 Upload audio files for recognition

 Deploy to Render / PythonAnywhere

📄 License
MIT License
© 2025 Your Name

🙌 Contributions
Pull requests are welcome! For major changes, please open an issue first.

yaml
Copy
Edit

---

✅ Want me to generate a `requirements.txt` file as well?






You said:
but we didn't add the multiple languages



✅ Updated README.md Highlighting Only English Support

#  Speech ↔ Text Converter

This is a simple Flask web application that allows:

- 🎤 Converting speech (English) into text  
- 🔊 Converting typed text into spoken audio

Built with:
- 🐍 Python (Flask)
- 🎙️ SpeechRecognition (Google API)
- 🔊 gTTS (Google Text-to-Speech)
- 🖥️ HTML, CSS, JavaScript

---

## ✨ Features

- 🎤 Live microphone-based speech-to-text (English only)
- 🔊 Text-to-speech with downloadable `.mp3` (English)
- 🌙 Light/Dark mode toggle
- 💾 Download audio for TTS
- 🧹 Simple and responsive UI

---

## 🚀 Run Locally

1. Clone the repository:

```bash
git clone https://github.com/GopalChinta/speech-text-app.git
cd speech-text-app
Install dependencies:

pip install -r requirements.txt
Start the Flask app:

python app.py
Then open http://localhost:5000 in your browser.

📁 Project Structure

speech-text-app/
│
├── app.py
├── requirements.txt
├── static/
│   ├── style.css
│   └── script.js
├── templates/
│   └── index.html
└── README.md


📄 License
MIT License
© 2025 Chintha Venu Gopal

