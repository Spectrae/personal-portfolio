/**
 * 6.0 MOBILE NAVIGATION TOGGLE
 * Handles hamburger menu open/close and page scroll lock.
 */
export function initMobileNav() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('.mobile-nav-link');
    const html = document.documentElement;

    if (!hamburgerBtn || !mobileMenu) return;

    const toggleMenu = () => {
        const isOpen = hamburgerBtn.getAttribute('aria-expanded') === 'true';
        const newState = !isOpen;

        // Toggle ARIA and data attributes
        hamburgerBtn.setAttribute('aria-expanded', String(newState));
        mobileMenu.setAttribute('data-open', String(newState));

        // Toggle body scroll
        if (newState) {
            html.classList.add('no-scroll'); // Prevent background scrolling
        } else {
            html.classList.remove('no-scroll');
        }
    };

    // Toggle menu on button click
    hamburgerBtn.addEventListener('click', toggleMenu);

    // Close menu when a link is clicked (for single-page app behavior)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu.getAttribute('data-open') === 'true') {
                toggleMenu();
            }
        });
    });
}