const welcomeMessage = document.getElementById('welcome-message');
const logoutButton = document.getElementById('logout-button');

function displayScores(userId) {
    // Get the user's score document from Firestore
    const userScoresRef = db.collection('scores').doc(userId);

    userScoresRef.get().then((doc) => {
        if (doc.exists) {
            const userScores = doc.data();
            // Now display the scores, same logic as before
            document.querySelectorAll('li[data-quiz-id]').forEach(item => {
                const quizId = item.dataset.quizId;
                const totalQuestions = item.dataset.totalQuestions;
                const scoreData = userScores[quizId]; // scoreData might be an object now
                
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

// Listen for authentication state changes
auth.onAuthStateChanged((user) => {
    if (user) {
        // User is signed in.
        welcomeMessage.textContent = 'Welcome, ' + (user.email) + '!';
        displayScores(user.uid); // Pass the user's unique ID
    } else {
        // User is signed out.
        window.location.href = 'login.html';
    }
});

function handleLogout() {
    auth.signOut().then(() => {
        // Sign-out successful.
        window.location.href = 'login.html';
    });
}

logoutButton.addEventListener('click', handleLogout);
