const ThemeLoader = {
    themes: [],
    
    registerTheme: function(theme) {
        this.themes.push(theme);
    },
    
    getAllThemes: function() {
        return this.themes;
    },
    
    getThemeById: function(themeId) {
        return this.themes.find(theme => theme.id === themeId);
    }
};
