/**
 * 7.0 CONTACT FORM
 * Handles form submission via AJAX for a no-reload experience.
 */
export function initContactForm() {
    const form = document.querySelector('.contact-form');
    if (!form) return;

    const statusMessage = form.querySelector('.form-status-message');
    const submitButton = form.querySelector('button[type="submit"]');

    if (!statusMessage || !submitButton) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const action = form.getAttribute('action');
        const method = form.getAttribute('method');
        const originalButtonText = submitButton.textContent;

        // Disable button and show sending message
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
        statusMessage.classList.remove('show', 'success', 'error');
        statusMessage.textContent = '';

        try {
            const response = await fetch(action, {
                method: method,
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // Success
                statusMessage.textContent = 'Message sent successfully! Thanks for reaching out.';
                statusMessage.classList.add('show', 'success');
                form.reset();
            } else {
                // Handle server errors (e.g., from formsubmit.co)
                const data = await response.json();
                if (data.error) {
                    throw new Error(data.error);
                } else {
                    throw new Error('Something went wrong. Please try again.');
                }
            }

        } catch (error) {
            // Handle network errors
            statusMessage.textContent = error.message || 'An error occurred. Please try again later.';
            statusMessage.classList.add('show', 'error');

        } finally {
            // Re-enable button
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;

            // Hide status message after a few seconds
            setTimeout(() => {
                statusMessage.classList.remove('show');
            }, 5000);
        }
    });
}