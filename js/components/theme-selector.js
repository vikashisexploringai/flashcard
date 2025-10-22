const ThemeSelector = {
    init: function() {
        this.renderThemes();
    },
    
    renderThemes: function() {
        const themeList = document.getElementById('themeList');
        const themes = ThemeLoader.getAllThemes();
        
        themeList.innerHTML = themes.map(theme => `
            <div class="theme-card" onclick="ThemeSelector.selectTheme('${theme.id}')">
                <h3>${theme.name}</h3>
                <p>${theme.description}</p>
                <div class="card-count">${theme.flashcards.length} cards</div>
            </div>
        `).join('');
    },
    
    selectTheme: function(themeId) {
        const theme = ThemeLoader.getThemeById(themeId);
        if (theme) {
            FlashcardViewer.startTheme(theme);
            this.showScreen('flashcardScreen');
        }
    },
    
    showScreen: function(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
    }
};
