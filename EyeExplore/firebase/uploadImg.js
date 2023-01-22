import 'firebase/storage';
import { System } from './config';

function uploadImageToAuth(path, name){
    const firebase = new System().app
    
    const storage = firebase.storage();
    
    // Create a storage reference
    const storageRef = storage.ref();
    
    // Create a child reference
    const imageRef = storageRef.child('images/image.jpg');
    
    // Get the file from the path
    const file = new File([path], name, { type: 'image/jpeg' });
    
    // Upload the file to the child reference
    imageRef.put(file).then(function(snapshot) {
      console.log('Uploaded a blob or file!');
      console.log(snapshot)
    });
}

export { uploadImageToAuth}