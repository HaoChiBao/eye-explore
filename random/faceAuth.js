// import {API_KEY, API_SECRET} from './faceAPI/system.js';

async function authenticateFace() {

    const API_KEY = 'o0dH1DR8ZXFI70MdeHLKcWEZKt7c0dMS';
    const API_SECRET = '9NEwx7PGhH6d-3DtBbf91RfhLzRoGwC2';

    // const URL1 = 'https://www.biography.com/.image/t_share/MTUxNzIxODgzNTg5NDIwMzAw/pewdiepie_gettyimages-501661286.jpg'
    // const URL1 =  ''
    const URL1 =  'https://firebasestorage.googleapis.com/v0/b/eye-explore.appspot.com/o/ethan0.jpg?alt=media&token=25010326-d930-4716-a3a5-e3980e72b393'
    
    const URL2 =  'https://firebasestorage.googleapis.com/v0/b/eye-explore.appspot.com/o/ethan1.jpg?alt=media&token=367e55d3-72cd-4b8c-b044-05173793f2d9'
    // const URL2 =  ''
    // const URL2 =  'https://firebasestorage.googleapis.com/v0/b/eye-explore.appspot.com/o/pewdiepie1.jpg?alt=media&token=1bad9a29-f44d-4c36-859e-af1a24ce2b43'
    // const URL2 =  'https://media.glamour.com/photos/56e1f7be62b398fa64cbe36e/master/pass/inspired-2016-01-donald-trump-yellow-tie-main.jpg'
    // const URL2 =  'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_34/2978206/190820-pewdiepie-marzia-cs-1104a.jpg'

    const url = `https://api-us.faceplusplus.com/facepp/v3/compare?api_key=${API_KEY}&api_secret=${API_SECRET}&image_url1=${URL1}&image_url2=${URL2}`;
    fetch(url, {method: 'POST'})

    .then(response => response.json())
    .then(response => {
        const confidence = response.confidence;
        console.log(response)
        
        console.log()
        console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
        console.log('Confidence level:', confidence, '%')
    })
    .catch(err => console.error(err));
    // const json = await response.json();
    // console.log(json);
}

authenticateFace();
// 
// export {authenticateFace};