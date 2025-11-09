/**
 * 3.0 FADE-IN ELEMENTS ON SCROLL
 * Uses IntersectionObserver for performant fade-in animations.
 */
export function initScrollObserver() {
    const faders = document.querySelectorAll('.fade-in-element');

    if (faders.length === 0) return;

    // Check if IntersectionObserver is supported
    if ("IntersectionObserver" in window) {
        
        // Options: Trigger when 10% visible, and 50px before it enters viewport
        const observerOptions = {
            rootMargin: '0px 0px -50px 0px',
            threshold: 0.1 
        };

        const observer = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        obs.unobserve(entry.target); // Optimization: Stop observing once visible
                    }
                });
            },
            observerOptions
        );
        
        faders.forEach((el) => observer.observe(el));

    } else {
        // Fallback for older browsers (e.g., IE)
        // Make all elements visible immediately
        faders.forEach((el) => el.classList.add('is-visible'));
    }
}