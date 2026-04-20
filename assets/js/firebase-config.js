import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-firestore.js"

const firebaseConfig = {
    apiKey: "AIzaSyBtZpCVHuRPPWDVt7ToWFLM8MYl9ggUoDg",
    authDomain: "smart-city-98f1d.firebaseapp.com",
    projectId: "smart-city-98f1d",
    storageBucket: "smart-city-98f1d.firebasestorage.app",
    messagingSenderId: "968467538345",
    appId: "1:968467538345:web:b6ef87985386682aff64b8",
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db}