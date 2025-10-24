// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// Configuração do Firebase (a sua)
const firebaseConfig = {
  apiKey: "AIzaSyCMtSX15hXNoswu3lYv9nbA3qpectufCXk",
  authDomain: "fiado-padaria.firebaseapp.com",
  projectId: "fiado-padaria",
  storageBucket: "fiado-padaria.firebasestorage.app",
  messagingSenderId: "264543302065",
  appId: "1:264543302065:web:55fae38d4e15d504abcd90"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
