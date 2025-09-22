// Import the 'auth' service we initialized in firebase-init.js
import { auth } from './firebase-init.js';

// Import the specific function we need from the Firebase Auth SDK
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";

const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email-input'); // Make sure your HTML has this ID
const passwordInput = document.getElementById('password-input'); // And this ID
const errorMessage = document.getElementById('error-message');

// Attach the event listener to the form
loginForm.addEventListener('submit', (event) => {
    // Prevent the form from reloading the page
    event.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;
    
    errorMessage.textContent = ''; // Clear previous errors

    // Use the Firebase function to sign in
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Sign-in was successful, redirect to the main page
            window.location.href = 'index.html';
        })
        .catch((error) => {
            // An error happened.
            console.error("Login failed:", error); // Log the full error to the console
            // Show a user-friendly message
            if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
                errorMessage.textContent = 'Incorrect email or password. Please try again.';
            } else {
                errorMessage.textContent = 'An error occurred. Please try again later.';
            }
        });
});
