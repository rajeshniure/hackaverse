<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Signup Form</title>
    <link rel="stylesheet" href="signup.css">
</head>
<body>
    <div class="container">
        <form id="signupForm">
            <h2>Signup</h2>
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required>
            <label for="phone">Phone Number:</label>
            <input type="text" id="phone" name="phone" required>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
            <button type="submit">Submit</button>
            <p id="error-message"></p>
        </form>
    </div>
    <script src="signup.js"></script>
</body>
</html>

