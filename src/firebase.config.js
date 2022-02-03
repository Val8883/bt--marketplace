// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxwc687SnhHLAozAM_6LcdzRKOIf3skEs",
  authDomain: "bt--house-marketplace-app.firebaseapp.com",
  projectId: "bt--house-marketplace-app",
  storageBucket: "bt--house-marketplace-app.appspot.com",
  messagingSenderId: "169960761084",
  appId: "1:169960761084:web:23152c20e97702a68d9979"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();