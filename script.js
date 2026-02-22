import { auth, db } from "./firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } 
from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";

import { doc, setDoc } 
from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";
// AUTO CAPITAL
document.getElementById("name")?.addEventListener("input", function() {
    this.value = this.value.toUpperCase();
});

// REGISTER
function register() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let dob = document.getElementById("dob").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        db.collection("players").doc(userCredential.user.uid).set({
            name: name,
            phone: phone,
            dob: dob,
            matches: 0,
            amount: 0
        });
        alert("Registered Successfully!");
    });
}

// LOGIN
function login() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    auth.signInWithEmailAndPassword(email, password)
    .then(() => {
        window.location = "dashboard.html";
    });
}

// ADD MATCH
function addMatch() {
    alert("Match Added (Connect Firestore update logic)");
}

// ADD WINNING
function addWinning() {
    let amount = prompt("Enter Winning Amount:");
    alert("Winning Added ₹" + amount);
}

// LOGOUT
function logout() {
    auth.signOut();
    window.location = "index.html";
}