
function setDarkTheme(isDark) {
    if (isDark) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        themeToggleButton.textContent = 'Toggle Bright Mode';
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
        themeToggleButton.textContent = 'Toggle Dark Mode';
    }
}


const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') { 
    setDarkTheme(true);
} else {
    setDarkTheme(false);
}


themeToggleButton.addEventListener('click', () => {
    const isCurrentlyDark = document.body.classList.contains('dark-mode');
    setDarkTheme(!isCurrentlyDark);
});