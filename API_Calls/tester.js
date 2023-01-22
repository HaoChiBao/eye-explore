(function() {
  const uploadURL = "{{ url_for('upload') }}";
  const startButton = document.getElementById("toggle-rec-btn");
  startButton.addEventListener("click", function() {
    if (!navigator.mediaDevices) {
      console.error("getUserMedia not supported.")
      return;
    }

    const constraints = { audio: true };
    navigator.mediaDevices.getUserMedia(constraints)
    .then(function(stream) {
        let chunks = []
        let recorder = new MediaRecorder(stream);
        recorder.ondataavailable = event => {
            // Collect all the chunks of the recording in an array.
            chunks.push(event.data);
        };
        recorder.onstop = event => {
          console.log("Recording stopped.")
          // Create a blob with all the chunks of the recording.
          let blob = new Blob(chunks, { type: recorder.mimeType });
          chunks = [];
          startButton.disabled = false;

          // Create form data that contain the recording.
          let formData = new FormData();
          formData.append("audio_file", blob);

          // Send the form data to the server.
          fetch(uploadURL, {
            method: "POST",
            cache: "no-cache",
            body: formData
          }).then(resp => {
            if (resp.status === 200) {
              window.location.reload(true);
            } else {
              console.error("Error:", resp)
            }
          }).catch(err => {
            console.error(err);
          });
        };
        recorder.onstart = event => {
          console.log("Recording started.");
          startButton.disabled = true;
          // Stop recording when the time is up.
          setTimeout(function() { recorder.stop(); }, 10000);
        };
        recorder.start();
    })
    .catch(function(err) {
        console.error(err);
    });
  });
})();