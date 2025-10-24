npm install firebase





// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMtSX15hXNoswu3lYv9nbA3qpectufCXk",
  authDomain: "fiado-padaria.firebaseapp.com",
  projectId: "fiado-padaria",
  storageBucket: "fiado-padaria.firebasestorage.app",
  messagingSenderId: "264543302065",
  appId: "1:264543302065:web:55fae38d4e15d504abcd90",
  measurementId: "G-J2V7H7S9L7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
