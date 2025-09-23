// main.js

import { auth, db } from './firebase-init.js';
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";
// We now need to import the quiz data to get titles and group by chapter
import { quizzes } from 'quiz/quizzes.js';

const welcomeMessage = document.getElementById('welcome-message');
const logoutButton = document.getElementById('logout-button');
const appContent = document.getElementById('app-content');
const loadingMessage = document.getElementById('loading-message');
const dashboardContainer = document.getElementById('dashboard-container');
const dailyProgressRings = document.getElementById('daily-progress-rings');
const dailySummaryText = document.getElementById('daily-summary-text');

// --- Main Data Processing and Rendering Function ---
function processAndRenderDashboard(userId) {
    const userScoresRef = doc(db, 'scores', userId);

    getDoc(userScoresRef).then((docSnap) => {
        const userScores = docSnap.exists() ? docSnap.data() : {};
        
        // --- 1. Process Data ---
        const today = new Date().toISOString().slice(0, 10); // Get today's date as "YYYY-MM-DD"
        let quizzesCompletedToday = 0;
        const chapterData = {};

        // Group scores by chapter
        for (const quizId in quizzes) {
            const quizInfo = quizzes[quizId];
            const chapter = quizInfo.chapter || "General"; // Assume a chapter property in quizzes.js
            const scoreInfo = userScores[quizId];

            if (!chapterData[chapter]) {
                chapterData[chapter] = { totalScore: 0, totalPossible: 0, quizCount: 0 };
            }

            if (scoreInfo) {
                chapterData[chapter].totalScore += scoreInfo.score;
                chapterData[chapter].totalPossible += scoreInfo.total;
                
                // Check if completed today
                if (scoreInfo.lastCompleted && scoreInfo.lastCompleted.slice(0, 10) === today) {
                    quizzesCompletedToday++;
                }
            }
        }
        
        // --- 2. Render Daily Goal Tracker ---
        dailyProgressRings.innerHTML = ''; // Clear previous rings
        for (let i = 0; i < 3; i++) {
            const ring = document.createElement('div');
            ring.className = `w-8 h-8 rounded-full border-4 ${i < quizzesCompletedToday ? 'bg-green-500 border-green-600' : 'bg-gray-200 border-gray-300'}`;
            dailyProgressRings.appendChild(ring);
        }
        dailySummaryText.textContent = `${quizzesCompletedToday} of 3 quizzes completed today.`;

        // --- 3. Render Chapter Cards ---
        dashboardContainer.innerHTML = ''; // Clear previous cards
        for (const chapter in chapterData) {
            const data = chapterData[chapter];
            const percentage = data.totalPossible > 0 ? Math.round((data.totalScore / data.totalPossible) * 100) : 0;
            
            const chapterCard = document.createElement('div');
            chapterCard.className = 'bg-white p-6 rounded-2xl shadow-lg';
            
            // Card HTML Content
            chapterCard.innerHTML = `
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-lg font-bold text-gray-800">${chapter}</h3>
                    <span class="text-xl font-bold text-blue-600">${percentage}%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                    <div class="bg-blue-600 h-2.5 rounded-full" style="width: ${percentage}%"></div>
                </div>
                <ul class="space-y-2 mt-4">
                    ${Object.keys(quizzes).filter(id => (quizzes[id].chapter || "General") === chapter).map(id => `
                        <li class="flex justify-between items-center">
                            <a href="quiz.html?id=${id}" class="text-blue-600 hover:underline">
                                ${quizzes[id].title}
                            </a>
                            <span class="text-gray-500 font-medium text-sm">
                                ${userScores[id] ? `${userScores[id].score} / ${userScores[id].total}` : 'Not taken'}
                            </span>
                        </li>
                    `).join('')}
                </ul>
            `;
            dashboardContainer.appendChild(chapterCard);
        }
    });
}


function handleLogout() {
    signOut(auth).catch((error) => console.error('Sign out error', error));
}
logoutButton.addEventListener('click', handleLogout);

// --- Main Authentication Logic ---
onAuthStateChanged(auth, (user) => {
    if (user) {
        loadingMessage.style.display = 'none';
        appContent.style.display = 'block';
        welcomeMessage.textContent = 'Welcome, ' + (user.email);
        processAndRenderDashboard(user.uid);
    } else {
        window.location.href = 'login.html';
    }
});
