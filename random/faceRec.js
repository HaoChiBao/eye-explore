const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': '7a3fc1f32amsh3c44a19d80ce6f2p1fe74ajsn245fa453278d',
		'X-RapidAPI-Host': 'kairosapi-karios-v1.p.rapidapi.com'
	},
	body: '{"gallery_name":"MyGallery"}'
};

fetch('https://kairosapi-karios-v1.p.rapidapi.com/gallery/remove', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));