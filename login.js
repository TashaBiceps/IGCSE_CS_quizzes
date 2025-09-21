// --- TEACHER: EDIT THIS LIST ---
// Add the names of all your students here.
// The login is case-insensitive, so "Ali" is the same as "ali".
const allowedStudents = [
    "Adeeb",
    "Nashwa",
    "Arrianna"
];
// ---------------------------------

// Get the elements from the HTML page
const loginForm = document.getElementById('login-form');
const nameInput = document.getElementById('name-input');
const errorMessage = document.getElementById('error-message');

// --- Main Login Logic ---
// This function is called when the student clicks the "Login" button.
function handleLogin(event) {
    // Prevent the form from refreshing the page
    event.preventDefault();

    // Get the name the student entered, remove extra spaces, and make it lowercase
    const enteredName = nameInput.value.trim().toLowerCase();

    // Check if the entered name exists in our list of students (also in lowercase)
    const isAllowed = allowedStudents.some(student => student.toLowerCase() === enteredName);

    if (isAllowed) {
        // If the name is in the list:
        // 1. Get the correctly capitalized name from our original list
        const correctName = allowedStudents.find(student => student.toLowerCase() === enteredName);
        
        // 2. "Remember" the user by saving their name in the browser's local storage
        localStorage.setItem('loggedInUser', correctName);
        
        // 3. Redirect them to the main quiz page
        window.location.href = 'index.html';
        
    } else {
        // If the name is NOT in the list:
        // 1. Show an error message
        errorMessage.textContent = 'Name not found. Please check your spelling.';
        
        // 2. Clear the input field
        nameInput.value = '';
    }
}

// --- Check if user is already logged in ---
// This runs as soon as the page loads
function checkExistingLogin() {
    const currentUser = localStorage.getItem('loggedInUser');
    if (currentUser) {
        // If we find a user in local storage, they don't need to log in again.
        // Immediately send them to the main page.
        window.location.href = 'index.html';
    }
}

// Attach the handleLogin function to the form's "submit" event
loginForm.addEventListener('submit', handleLogin);

// Run the check for an existing login as soon as the script loads
checkExistingLogin();
