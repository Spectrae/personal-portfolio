/**
 * 1.0 THEME TOGGLE
 * Handles light/dark mode persistence in localStorage and icon switching.
 */
export function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;

    const html = document.documentElement;
    const sunIcon = themeToggle.querySelector('.sun-icon');
    const moonIcon = themeToggle.querySelector('.moon-icon');

    if (!sunIcon || !moonIcon) return;

    /**
     * Updates the visible icon based on the current theme.
     * @param {string} theme - The current theme ('light' or 'dark').
     */
    const updateIcons = (theme) => {
        if (theme === 'light') {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        } else {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        }
    };

    // Load saved theme on page load
    const savedTheme = localStorage.getItem('theme');
    const currentTheme = savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    if (currentTheme === 'light') {
        html.classList.remove('dark');
    } else {
        html.classList.add('dark');
    }
    updateIcons(currentTheme);

    // Toggle theme and save preference on click
    themeToggle.addEventListener('click', () => {
        html.classList.toggle('dark');
        const newTheme = html.classList.contains('dark') ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        updateIcons(newTheme);
    });
}