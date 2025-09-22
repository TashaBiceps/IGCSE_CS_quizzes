// main.js

import { auth, db } from './firebase-init.js';
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";

const welcomeMessage = document.getElementById('welcome-message');
const logoutButton = document.getElementById('logout-button');
const appContent = document.getElementById('app-content');
const loadingMessage = document.getElementById('loading-message');

function displayScores(userId) {
    const userScoresRef = doc(db, 'scores', userId);

    getDoc(userScoresRef).then((docSnap) => {
        if (docSnap.exists()) {
            const userScores = docSnap.data();
            document.querySelectorAll('li[data-quiz-id]').forEach(item => {
                const quizId = item.dataset.quizId;
                const totalQuestions = item.dataset.totalQuestions;
                const scoreData = userScores[quizId];
                
                if (scoreData && scoreData.score !== undefined) {
                    const scoreDisplaySpan = item.querySelector('.score-display');
                    if (scoreDisplaySpan) {
                        scoreDisplaySpan.textContent = `Top Score: ${scoreData.score} / ${totalQuestions}`;
                    }
                }
            });
        }
    }).catch((error) => {
        console.error("Error getting scores:", error);
    });
}

function handleLogout() {
    signOut(auth).then(() => {
        // The onAuthStateChanged listener below will handle the redirect
        console.log('User signed out');
    }).catch((error) => {
        console.error('Sign out error', error);
    });
}

// Attach the logout function to the button's click event
logoutButton.addEventListener('click', handleLogout);


// --- Main Authentication Logic ---
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in.
        // 1. Hide the loading message
        loadingMessage.style.display = 'none';
        // 2. Show the main app content
        appContent.style.display = 'block';

        // 3. Populate the page with user data
        welcomeMessage.textContent = 'Welcome, ' + (user.email);
        displayScores(user.uid);
    } else {
        // User is signed out. Redirect them to the login page.
        window.location.href = 'login.html';
    }
});
