const themeToggleButton = document.getElementById('themeToggle');

function setDarkTheme(isDark) {
    // Conditional Branching
    if (isDark) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark'); // Store preference in localStorage
       
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light'); // Store preference in localStorage
        
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