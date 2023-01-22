import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import {getFirestore} from 'firebase/firestore/lite';
import { Auth } from './auth';

const firebaseConfig = {
  apiKey: "AIzaSyC_FweyDpRY32-nnCdqvK8e7mDZk9DayB4",
  authDomain: "eye-explore.firebaseapp.com",
  projectId: "eye-explore",
  storageBucket: "eye-explore.appspot.com",
  messagingSenderId: "162323951410",
  appId: "1:162323951410:web:76f02e0509b6222cb4312b",
  measurementId: "G-RFFB2C7MN4"
};

class System {
  constructor(){
    this.app = initializeApp(firebaseConfig)
    this.db = getFirestore(this.app);
    this.getAuth = new Auth();
    this.storage = getStorage(this.app);
  }

  upload(path, name){
    const storageRef = ref(this.storage, path);

    const image = new File([name], name, {type: 'image/jpeg'});

    uploadBytes(storageRef, image).then((snapshot) => {
      console.log(snapshot)
      console.log('Uploaded a blob or file!');
    });
  }
}

export {System}

