// Wait for the DOM to fully load
window.addEventListener('DOMContentLoaded', () => {
    // Select the form and feedback division
    const form = document.getElementById('registration-form');
    if (!form) {
        console.error('Form with ID "registration-form" not found.');
        return;
    }

    const feedbackDiv = document.getElementById('form-feedback');
    if (!feedbackDiv) {
        console.error('Feedback division with ID "form-feedback" not found.');
        return;
    }

    // Add event listener for form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        // Retrieve and trim input values
        const username = document.getElementById('username')?.value.trim() || '';
        const email = document.getElementById('email')?.value.trim() || '';
        const password = document.getElementById('password')?.value.trim() || '';

        // Initialize validation variables
        let isValid = true;
        const messages = [];

        // Username validation
        const usernameRegex = /^[a-zA-Z0-9_]+$/; // Allows only letters, numbers, and underscores
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        } else if (!usernameRegex.test(username)) {
            isValid = false;
            messages.push('Username can only contain letters, numbers, and underscores.');
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Matches a basic email format
        if (!emailRegex.test(email)) {
            isValid = false;
            messages.push('Please enter a valid email address.');
        }

        // Password validation
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/; // Requires at least one uppercase, one lowercase, one number, one special character
        if (!passwordRegex.test(password)) {
            isValid = false;
            messages.push('Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character.');
        }

        // Display feedback
        feedbackDiv.style.display = 'block'; // Ensure feedback is visible
        if (isValid) {
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745';
        } else {
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = '#dc3545';
        }
    });
});
