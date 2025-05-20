document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally and causing a page reload

    const formData = new FormData(this);
    const statusMessage = document.getElementById('status-message');
    
    // Show a loading message
    statusMessage.style.display = 'block';
    statusMessage.textContent = 'Sending message... Please wait.';
    statusMessage.className = 'info-message';

    // Send data to send_email.php
    fetch('send_email.php', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not OK');
        }
        return response.json();
    })
    .then(result => {
        if (result.status === 'success') {
            statusMessage.textContent = result.message;
            statusMessage.className = 'success-message';
            this.reset(); // Clear form if submission is successful
        } else {
            statusMessage.textContent = result.message;
            statusMessage.className = 'error-message';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        statusMessage.textContent = 'An error occurred while sending the message. Please try again later.';
        statusMessage.className = 'error-message';
    });
});
