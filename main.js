// main.js

import { auth, db } from './firebase-init.js';
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";
import { quizzes } from './quiz/quizzes.js';

// --- Get all page elements ---
const welcomeMessage = document.getElementById('welcome-message');
const logoutButton = document.getElementById('logout-button');
const appContent = document.getElementById('app-content');
const loadingMessage = document.getElementById('loading-message');
const dashboardContainer = document.getElementById('dashboard-container');
const dailyProgressRings = document.getElementById('daily-progress-rings');
const dailySummaryText = document.getElementById('daily-summary-text');
const cycleResetText = document.getElementById('cycle-reset-text');
const prevCycleContainer = document.getElementById('previous-cycle-container');
const prevCycleDashboard = document.getElementById('previous-cycle-dashboard');

// --- Helper function to calculate cycle info ---
function getCycleInfo() {
    const genesisDate = new Date('2024-01-01T00:00:00Z');
    const now = new Date();
    const daysSinceGenesis = Math.floor((now - genesisDate) / (1000 * 60 * 60 * 24));
    
    const cycleId = Math.floor(daysSinceGenesis / 3);
    const daysIntoCycle = daysSinceGenesis % 3;
    const daysLeft = 3 - daysIntoCycle;
    
    const resetDate = new Date(now);
    resetDate.setDate(now.getDate() + daysLeft);
    
    return {
        cycleId: cycleId,
        daysLeft: daysLeft,
        resetDateString: resetDate.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })
    };
}

// --- Function to render a set of chapter cards into a container ---
function renderChapterCards(container, chapterData, userScores, cycleId) {
    container.innerHTML = '';
    for (const chapter in chapterData) {
        const data = chapterData[chapter];
        const percentage = data.totalPossible > 0 ? Math.round((data.totalScore / data.totalPossible) * 100) : 0;
        
        const card = document.createElement('div');
        if (cycleId !== 'previous') { // Only add border to current cycle cards
             card.className = 'bg-gray-50 p-6 rounded-xl border';
        }
       
        card.innerHTML = `
            <div class="flex justify-between items-center mb-4">
                <h3 class="text-lg font-bold text-gray-800">${chapter}</h3>
                <span class="text-xl font-bold text-blue-600">${percentage}%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                <div class="bg-blue-600 h-2.5 rounded-full" style="width: ${percentage}%"></div>
            </div>
            ${cycleId !== 'previous' ? `<ul class="space-y-2 mt-4">
                ${Object.keys(quizzes).filter(id => (quizzes[id].chapter || "General") === chapter).map(id => `
                    <li class="flex justify-between items-center">
                        <a href="quiz/quiz.html?id=${id}" class="text-blue-600 hover:underline">
                            ${quizzes[id].title}
                        </a>
                        <span class="text-gray-500 font-medium text-sm">
                            ${(userScores[id] && userScores[id].cycleId === cycleId) ? `${userScores[id].score} / ${userScores[id].total}` : 'Not taken'}
                        </span>
                    </li>
                `).join('')}
            </ul>` : ''}
        `;
        container.appendChild(card);
    }
}


function processAndRenderDashboard(userId) {
    const cycleInfo = getCycleInfo();
    cycleResetText.textContent = `Scores will reset on ${cycleInfo.resetDateString}. You have ${cycleInfo.daysLeft} day(s) left.`;

    const userScoresRef = doc(db, 'scores', userId);
    getDoc(userScoresRef).then((docSnap) => {
        const userScores = docSnap.exists() ? docSnap.data() : {};
        
        const today = new Date().toISOString().slice(0, 10);
        let quizzesCompletedToday = 0;
        const currentChapterData = {};
        const prevChapterData = {};

        for (const quizId in quizzes) {
            const quizInfo = quizzes[quizId];
            const chapter = quizInfo.chapter || "General";
            const scoreInfo = userScores[quizId];

            // Initialize chapter data objects
            if (!currentChapterData[chapter]) currentChapterData[chapter] = { totalScore: 0, totalPossible: 0 };
            if (!prevChapterData[chapter]) prevChapterData[chapter] = { totalScore: 0, totalPossible: 0 };

            if (scoreInfo) {
                // Check if score belongs to the current cycle
                if (scoreInfo.cycleId === cycleInfo.cycleId) {
                    currentChapterData[chapter].totalScore += scoreInfo.score;
                    currentChapterData[chapter].totalPossible += scoreInfo.total;
                    if (scoreInfo.lastCompleted && scoreInfo.lastCompleted.slice(0, 10) === today) {
                        quizzesCompletedToday++;
                    }
                }
                // Check if score belongs to the previous cycle
                else if (scoreInfo.cycleId === cycleInfo.cycleId - 1) {
                    prevChapterData[chapter].totalScore += scoreInfo.score;
                    prevChapterData[chapter].totalPossible += scoreInfo.total;
                }
            }
        }
        
        // Render Daily Goal Tracker
        dailyProgressRings.innerHTML = '';
        for (let i = 0; i < 3; i++) {
            const ring = document.createElement('div');
            ring.className = `w-8 h-8 rounded-full border-4 ${i < quizzesCompletedToday ? 'bg-green-500 border-green-600' : 'bg-gray-200 border-gray-300'}`;
            dailyProgressRings.appendChild(ring);
        }
        dailySummaryText.textContent = `${quizzesCompletedToday} of 3 quizzes completed today.`;

        // Render Current and Previous Cycle Cards
        renderChapterCards(dashboardContainer, currentChapterData, userScores, cycleInfo.cycleId);
        
        // Check if there is data for the previous cycle before showing the container
        const hasPrevData = Object.values(prevChapterData).some(data => data.totalPossible > 0);
        if (hasPrevData) {
            prevCycleContainer.style.display = 'block';
            renderChapterCards(prevCycleDashboard, prevChapterData, userScores, 'previous');
        }
    });
}

function handleLogout() {
    signOut(auth).catch((error) => console.error('Sign out error', error));
}
logoutButton.addEventListener('click', handleLogout);

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
