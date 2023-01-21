fetch('https://vip-face.cognitiveservices.azure.com//face/v1.0/detect', {
    method: 'POST',
    endpoint: 'https://vip-face.cognitiveservices.azure.com/',
    headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': 'a5107ef5efc04b07a66c3fce4c4ea594',
    },
    body: JSON.stringify({
        // url: "https://upload.wikimedia.org/wikipedia/commons/3/37/Dagestani_man_and_woman.jpg"
        // url: "https://i.imgur.com/Ip5G6If.jpeg"
        url: "https://firebasestorage.googleapis.com/v0/b/eye-explore.appspot.com/o/startup.JPG?alt=media&token=77151eb9-766b-42be-bbe3-cec6f3131f68"
    })
}).then(function(response) {
    return response.json()
}).then (function (data) {
    console.log(data)
})