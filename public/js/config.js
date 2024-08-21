// config.js
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getDatabase, ref, push, set } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js';

const firebaseConfig = {
    apiKey: "AIzaSyAeWW5ecET_EJjC9gOwhjeaNoMr4qu5KVc",
    authDomain: "paroquia-bom-pastor-marituba.firebaseapp.com",
    databaseURL: "https://paroquia-bom-pastor-marituba-default-rtdb.firebaseio.com",
    projectId: "paroquia-bom-pastor-marituba",
    storageBucket: "paroquia-bom-pastor-marituba.appspot.com",
    messagingSenderId: "932723398397",
    appId: "1:932723398397:web:321e2f009f09b3cf055094",
    measurementId: "G-PCG2NM2VSN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Export the database object
export { database };
