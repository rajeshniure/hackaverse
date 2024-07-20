document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Username validation: must be at least 3 characters long
    if (username.length < 3) {
        errorMessage.textContent = 'Username must be at least 3 characters long.';
        return;
    }

    // Phone number validation: must be 10 digits
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        errorMessage.textContent = 'Phone number must be 10 digits long.';
        return;
    }

    // Email validation: must be a valid email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        return;
    }

    // Password validation: must be at least 6 characters long
    if (password.length < 6) {
        errorMessage.textContent = 'Password must be at least 6 characters long.';
        return;
    }

    // If validation passes
    errorMessage.textContent = '';
    alert('Form submitted successfully!');
    // Here you can add code to submit the form data to the server
});
