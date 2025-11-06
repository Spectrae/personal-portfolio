/**
 * 5.0 REUSABLE GRID TOGGLE FUNCTION
 * Handles 'Show More' / 'Show Less' functionality for any grid.
 */

/**
 * Private helper function to set up a single toggle instance.
 * @param {string} toggleBtnId - The ID of the toggle button.
 * @param {string} gridSelector - The CSS selector for the grid container.
 */
function setupToggleGrid(toggleBtnId, gridSelector) {
    const toggleBtn = document.getElementById(toggleBtnId);
    const grid = document.querySelector(gridSelector);

    if (toggleBtn && grid) {
        toggleBtn.addEventListener('click', () => {
            const isOpen = toggleBtn.getAttribute('data-open') === 'true';
            const newState = !isOpen; // The new state we are moving to
            
            // Update button state and grid class
            toggleBtn.setAttribute('data-open', String(newState));
            grid.classList.toggle('grid-expanded', newState);

            // Update button text
            const label = toggleBtn.querySelector('span');
            if (label) {
                label.textContent = newState ? 'Show Less' : 'Show More';
            }
            
            // Scroll to the button when opening
            if (newState) {
                toggleBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    }
}

/**
 * Public initializer that sets up all grid toggles on the site.
 */
export function initGridToggles() {
    setupToggleGrid('projects-toggle-btn', '.project-grid');
    setupToggleGrid('certs-toggle-btn', '.certifications-grid');
}