const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email-input'); // Make sure your HTML has this ID
const passwordInput = document.getElementById('password-input'); // And this ID
const errorMessage = document.getElementById('error-message');

function handleLogin(event) {
    event.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in successfully
            window.location.href = 'index.html';
        })
        .catch((error) => {
            // Handle Errors here.
            errorMessage.textContent = error.message;
        });
}

loginForm.addEventListener('submit', handleLogin);
