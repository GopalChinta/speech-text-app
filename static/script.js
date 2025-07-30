// 🌙 Theme toggle logic
const themeToggle = document.getElementById("theme-toggle");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  document.body.classList.add("dark");
  themeToggle.textContent = "🌞";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  themeToggle.textContent = isDark ? "🌞" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// 🎤 Speech to Text
function startSpeechToText() {
  const output = document.getElementById('speech-output');
  output.innerText = '🎤 Listening...';

  fetch('/api/speech-to-text')
    .then(res => res.json())
    .then(data => {
      if (data.status === 'success') {
        output.innerText = '📝 ' + data.text;
      } else {
        output.innerText = '❌ ' + data.message;
      }
    })
    .catch(err => {
      output.innerText = '⚠️ Error occurred';
      console.error(err);
    });
}

// 🔊 Text to Speech
function convertTextToSpeech() {
  const text = document.getElementById('tts-input').value;
  const audio = document.getElementById('tts-audio');

  fetch('/api/text-to-speech', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text })
  })
    .then(res => res.json())
    .then(data => {
      if (data.status === 'success') {
        audio.src = data.audio;
        audio.style.display = 'block';
        audio.play();

        // Download link setup
        const downloadLink = document.getElementById('download-link');
        downloadLink.href = data.audio;
        downloadLink.download = "speech.mp3";
        downloadLink.style.display = 'inline-block';
      } else {
        alert(data.message);
      }
    })
    .catch(err => {
      alert('⚠️ Server error');
      console.error(err);
    });
}
