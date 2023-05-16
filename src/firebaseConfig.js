
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4rFc0zriVcjL5zel3M7MXA4pf85Fa17w",
  authDomain: "connectin-ce0b0.firebaseapp.com",
  projectId: "connectin-ce0b0",
  storageBucket: "connectin-ce0b0.appspot.com",
  messagingSenderId: "1086038666943",
  appId: "1:1086038666943:web:b02e7d01b6f7234325200a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
export {auth, app, firestore, storage};