// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Wait a moment for all themes to load, then initialize
    setTimeout(() => {
        ThemeSelector.init();
        FlashcardViewer.init();
    }, 100);
});
