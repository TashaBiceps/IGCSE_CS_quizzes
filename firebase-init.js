// In firebase-init.js

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
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Get references to the services we're going to use
const auth = firebase.auth();
const db = firebase.firestore();
