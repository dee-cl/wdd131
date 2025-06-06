const themeToggleButton = document.getElementById('themeToggle');
const backgroundDiv = document.querySelector('.background');

function setDarkTheme(isDark) {

    if (isDark) {
        document.body.classList.add('dark-mode');
        backgroundDiv.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
       
    } else {
        document.body.classList.remove('dark-mode');
        backgroundDiv.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
        
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