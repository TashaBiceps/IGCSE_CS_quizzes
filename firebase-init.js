// In firebase-init.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-analytics.js";

// PASTE YOUR COPIED firebaseConfig OBJECT HERE
const firebaseConfig = {
    apiKey: "AIzaSyAZJRs8Otce7v1Wex2iW6NuKxoFkouybsI",
    authDomain: "igcse-computer-science-quiz.firebaseapp.com",
    projectId: "igcse-computer-science-quiz",
    storageBucket: "igcse-computer-science-quiz.firebasestorage.app",
    messagingSenderId: "1087878300052",
    appId: "1:1087878300052:web:c6823f3bf306e7fb0b8f81",
    measurementId: "G-T296MN9K4M"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Get references to the services we're going to use
// At the bottom of firebase-init.js
export const auth = getAuth(app);
export const db = getFirestore(app);
