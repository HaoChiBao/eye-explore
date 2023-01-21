function sendWavFile(file) {
  var formData = new FormData();
  formData.append("audio_file", file);

  console.log(formData)
  fetch("http://localhost:3000/upload", {
    method: "POST",
    body: formData
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
}

console.log(sendWavFile("University of Toronto.wav"));