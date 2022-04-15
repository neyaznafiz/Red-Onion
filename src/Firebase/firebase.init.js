
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpvvb_YTy8BfxGM26TrS7G6CvgNITwjBA",
  authDomain: "red-onion-7.firebaseapp.com",
  projectId: "red-onion-7",
  storageBucket: "red-onion-7.appspot.com",
  messagingSenderId: "248338016803",
  appId: "1:248338016803:web:4b5ac1aed5b28ddb225f96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth