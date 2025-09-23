// login.js

// Import the 'auth' service we initialized in firebase-init.js
import { auth } from './firebase-init.js';

// Import the specific function we need from the Firebase Auth SDK
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";

// Get elements from the HTML
const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');
const errorMessage = document.getElementById('error-message');

// Attach the event listener to the form's 'submit' event
loginForm.addEventListener('submit', (event) => {
    // Prevents the page from refreshing when the form is submitted.
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
            // ✅ THIS IS THE NEW PART THAT HANDLES ERRORS
            console.error("Login failed:", error.code); // Log the specific error code for debugging

            // Check the error code from Firebase and show a user-friendly message
            if (
                error.code === 'auth/invalid-credential' ||
                error.code === 'auth/user-not-found' || 
                error.code === 'auth/wrong-password'
            ) {
                errorMessage.textContent = 'Incorrect email or password. Please try again.';
            } else if (error.code === 'auth/invalid-email') {
                errorMessage.textContent = 'Please enter a valid email address.';
            } else {
                // For any other errors (like network issues)
                errorMessage.textContent = 'An error occurred. Please try again later.';
            }
        });
});
