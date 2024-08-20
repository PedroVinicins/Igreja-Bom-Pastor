// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAdQNmme_E1sqyNiFJB2Vmy7iQ78hp6WA",
  authDomain: "projeto-pix-cadastro.firebaseapp.com",
  projectId: "projeto-pix-cadastro",
  storageBucket: "projeto-pix-cadastro.appspot.com",
  messagingSenderId: "327608359235",
  appId: "1:327608359235:web:0c8afefb4ccff3da66f7f6",
  measurementId: "G-Z3WE16F5P5"
};

// Initialize Firebase
const { initializeApp } = require('firebase-admin/app');
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);