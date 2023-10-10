// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, onValue } from "firebase/database";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-9l1tSqw7adRgDJHvfhup7wYiSihSxbU",
  authDomain: "chat-app-9d1d7.firebaseapp.com",
  projectId: "chat-app-9d1d7",
  storageBucket: "chat-app-9d1d7.appspot.com",
  messagingSenderId: "1038340950487",
  appId: "1:1038340950487:web:711cd600e347f457cc2392",
  measurementId: "G-XWRM18PNWJ",
  databaseURL: "https://chat-app-9d1d7-default-rtdb.asia-southeast1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app); 
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {database, ref, push, onValue, auth, provider}