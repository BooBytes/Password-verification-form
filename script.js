document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Check if passwords match
    if (password === confirmPassword) {
        document.getElementById('message').textContent = 'Passwords match. Form submitted!';
        document.getElementById('message').style.color = 'green';
        // Here you could add logic to handle form submission, e.g., send data to a server
    } else {
        document.getElementById('message').textContent = 'Passwords do not match. Please try again.';
        document.getElementById('message').style.color = 'red';
    }
});
