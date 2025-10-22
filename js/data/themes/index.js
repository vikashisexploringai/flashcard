// List all theme files here
const themeFiles = [
    'vocabulary',
    'tables',
    'indianRulers'
];

// Load all theme files dynamically
themeFiles.forEach(themeName => {
    const script = document.createElement('script');
    script.src = `js/data/themes/${themeName}.js`;
    document.head.appendChild(script);
});
