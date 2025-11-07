// Import all modules
import { initThemeToggle } from './modules/theme.js';
import { initHeaderScroll } from './modules/header.js';
import { initScrollObserver } from './modules/observers.js';
import { initAccordion } from './modules/accordion.js';
import { initGridToggles } from './modules/gridToggle.js';
import { initMobileNav } from './modules/mobileNav.js'; // NEW

// Wait for the DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', () => {
    
    // Initialize all imported modules
    initThemeToggle();
    initHeaderScroll();
    initScrollObserver();
    initAccordion();
    initGridToggles();
    initMobileNav(); // NEW
    
});