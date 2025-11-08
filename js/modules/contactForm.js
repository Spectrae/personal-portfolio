// Modified: contact-form-fix
/**
 * 7.0 CONTACT FORM SUBMISSION
 * Handles contact form submission using Fetch API to prevent page reload.
 */
export function initContactForm() {
    const contactForm = document.querySelector('.contact-form');
    if (!contactForm) return;

    // Create a status message element
    const statusMessage = document.createElement('div');
    statusMessage.className = 'form-status-message';
    
    // Insert the status message before the submit button
    const submitButton = contactForm.querySelector('button[type="submit"]');
    if (submitButton) {
        submitButton.before(statusMessage);
    } else {
        // Fallback if button isn't found
        contactForm.prepend(statusMessage);
    }

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission (redirect)

        const form = event.target;
        const formData = new FormData(form);
        const action = form.getAttribute('action');
        const method = form.getAttribute('method');

        // Show a "sending" message
        statusMessage.textContent = 'Sending...';
        statusMessage.className = 'form-status-message show'; // Remove success/error classes

        fetch(action, {
            method: method,
            body: formData,
            headers: {
                'Accept': 'application/json' // Important for many form handlers
            }
        })
        .then(response => {
            if (response.ok) {
                // Success
                statusMessage.textContent = 'Message sent successfully!';
                statusMessage.className = 'form-status-message show success';
                form.reset(); // Clear the form fields
            } else {
                // Server returned an error
                throw new Error('Network response was not ok.');
            }
        })
        .catch(error => {
            // Fetch error or server error
            console.error('Form submission error:', error);
            statusMessage.textContent = 'Oops! Something went wrong. Please try again.';
            statusMessage.className = 'form-status-message show error';
        });
    });
}