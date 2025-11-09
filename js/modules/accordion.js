/**
 * 4.0 ACCORDION
 * Handles the accordion functionality for the experience timeline.
 */
export function initAccordion() {
    const triggers = document.querySelectorAll('.timeline-accordion-trigger');

    if (triggers.length === 0) return;

    triggers.forEach(trigger => {
        const details = document.getElementById(trigger.getAttribute('aria-controls'));

        if (!details) return;

        trigger.addEventListener('click', () => {
            const isOpen = trigger.getAttribute('data-open') === 'true';
            const newState = !isOpen;

            trigger.setAttribute('data-open', String(newState));

            if (newState) {
                // Open the accordion
                details.style.maxHeight = details.scrollHeight + 'px';
            } else {
                // Close the accordion
                details.style.maxHeight = '0';
            }
        });
    });
}