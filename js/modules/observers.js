/**
 * 3.0 FADE-IN ELEMENTS ON SCROLL
 * Uses IntersectionObserver for performant fade-in animations.
 */
export function initScrollObserver() {
    const faders = document.querySelectorAll('.fade-in-element');

    if (faders.length === 0) return;

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target); // Optimization: Stop observing once visible
                    }
                });
            },
            { threshold: 0.2 } // Trigger when 20% of the element is visible
        );
        faders.forEach((el) => observer.observe(el));
    } else {
        // Fallback for older browsers (e.g., IE)
        faders.forEach((el) => el.classList.add('is-visible'));
    }
}