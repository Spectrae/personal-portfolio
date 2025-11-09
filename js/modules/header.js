/**
 * 2.0 HEADER SCROLL EFFECT
 * Adds a 'header-scrolled' class to the header on scroll for style changes.
 */
export function initHeaderScroll() {
    const header = document.querySelector('.main-header');
    
    if (!header) return;

    // Use a threshold to avoid triggering on small scrolls
    const scrollThreshold = 50;

    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    }, { passive: true }); // Optimization: Use passive listener for scroll
}