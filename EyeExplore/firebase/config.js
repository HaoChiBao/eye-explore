import { initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore/lite';
import { Auth } from './auth';

const firebaseConfig = {
  apiKey: "AIzaSyAVbDmak2KdFJMwuYzGbf-zqeD5cD6BNeQ",
    authDomain: "flash-cards-9c3f7.firebaseapp.com",
    databaseURL: "https://flash-cards-9c3f7-default-rtdb.firebaseio.com",
    projectId: "flash-cards-9c3f7",
    storageBucket: "flash-cards-9c3f7.appspot.com",
    messagingSenderId: "885289134038",
    appId: "1:885289134038:web:8346800f13cf6fd7d42677",
    measurementId: "G-K78MHSQ434"
  };

class System {
  constructor(){
    this.app = initializeApp(firebaseConfig)
    this.db = getFirestore(this.app);
    this.getAuth = new Auth();
  }
}

export {System}

