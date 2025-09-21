// Get elements from the main page
const welcomeMessage = document.getElementById('welcome-message');
const logoutButton = document.getElementById('logout-button');

// --- This is an "Auth Guard" ---
// It runs as soon as the page loads
function checkLoginStatus() {
    // Check for the logged-in user in local storage
    const currentUser = localStorage.getItem('loggedInUser');

    if (currentUser) {
        // If a user is found, display their name
        welcomeMessage.textContent = 'Welcome, ' + currentUser + '!';
    } else {
        // If NO user is found, they are not logged in.
        // Redirect them back to the login page.
        alert("You must be logged in to view this page.");
        window.location.href = 'login.html';
    }
}

// --- Logout Logic ---
function handleLogout() {
    // Remove the user's name from local storage
    localStorage.removeItem('loggedInUser');
    
    // Redirect back to the login page
    window.location.href = 'login.html';
}

// Attach the logout function to the button's click event
logoutButton.addEventListener('click', handleLogout);

// Run the login check when the main page loads
checkLoginStatus();
