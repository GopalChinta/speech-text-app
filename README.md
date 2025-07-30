

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

