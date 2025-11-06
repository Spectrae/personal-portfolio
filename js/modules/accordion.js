/**
 * 4.0 TIMELINE ACCORDION TOGGLE
 * Toggles 'data-open' attribute on click for accordion behavior.
 */
export function initAccordion() {
    const triggers = document.querySelectorAll('.timeline-accordion-trigger');

    if (triggers.length === 0) return;

    triggers.forEach((trigger) => {
        trigger.addEventListener('click', () => {
            // Toggle the 'data-open' attribute between 'true' and 'false'
            const isOpen = trigger.getAttribute('data-open') === 'true';
            trigger.setAttribute('data-open', String(!isOpen));
        });
    });
}