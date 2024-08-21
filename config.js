// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAeWW5ecET_EJjC9gOwhjeaNoMr4qu5KVc",
    authDomain: "paroquia-bom-pastor-marituba.firebaseapp.com",
    projectId: "paroquia-bom-pastor-marituba",
    storageBucket: "paroquia-bom-pastor-marituba.appspot.com",
    messagingSenderId: "932723398397",
    appId: "1:932723398397:web:321e2f009f09b3cf055094",
    measurementId: "G-PCG2NM2VSN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storageRef = firebase.storage().refFromURL('gs://paroquia-bom-pastor-marituba.appspot.com');