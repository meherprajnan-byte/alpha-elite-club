// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCfbOKD43HrPYiIJayDiAsGFG91c-w6Kmw",
  authDomain: "alpha-elite-club.firebaseapp.com",
  projectId: "alpha-elite-club",
  storageBucket: "alpha-elite-club.firebasestorage.app",
  messagingSenderId: "508151244698",
  appId: "1:508151244698:web:560b6db3999652ef067c23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export
export const auth = getAuth(app);
export const db = getFirestore(app);