import {storage} from '@react-native-firebase/storage'; // 1

module.exports = function uploadImageToAuth(path, imageName) {
    let reference = storage().ref(imageName);         // 2
    let task = reference.putFile(path);               // 3
    
    task.then((promise) => {                        
        console.log(promise)         // 4
        console.log('Image uploaded to the bucket!');
    }).catch((e) => {
        console.log('uploading image error => ', e)
    });
}

export default uploadImageToAuth; // 5