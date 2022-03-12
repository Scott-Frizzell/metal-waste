window.onload = () => {
    updateTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
}

function updateTheme(theme) {
    var elements = document.getElementsByClassName('change-theme');
    for ( i = 0; i < elements.length; i++ ) {
        elements[i].src = `../media/${elements[i].alt.toLowerCase()}_icon_${theme}.png`;
    }
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    updateTheme(e.matches ? 'dark' : 'light');
});