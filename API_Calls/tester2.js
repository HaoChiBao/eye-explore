const url = "http://localhost:3000/"

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

function textToSpeech(text) {
    var formData = new FormData();
    formData.append("predictions", text);

    console.log(formData);
    fetch("http://localhost:3000/tts", {
        method:"POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
}

function postImage(imageName, filePath){
    var endPoint = "http://localhost:3000/postImage/" + imageName + "/" + filePath;
    console.log(endPoint)
    fetch(endPoint, {
        method:"POST"
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
}

function getImage(imageName){
    var endPoint = "http://localhost:3000/getImage/" + imageName;
    console.log(endPoint)
    fetch(endPoint, {
        method:"GET"
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
    console.log(imageName)
}

function delPerson(personName){

}
//console.log(sendWavFile("University of Toronto.wav"));
//console.log(textToSpeech("sunglasses, dark glasses, shades mask, bow-tie"))
//console.log(getImage("pewds5"))
//console.log(postImage("p2", "paewds.jpeg"))
