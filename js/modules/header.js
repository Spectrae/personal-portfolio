/**
 * 2.0 HEADER SCROLL EFFECT
 * Adds a 'header-scrolled' class to the header on scroll.
 */
export function initHeaderScroll() {
    const header = document.querySelector('.main-header');
    
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    }, { passive: true }); // Optimization: Use passive listener for scroll
}