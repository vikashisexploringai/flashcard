const ThemeLoader = {
    getAllThemes: function() {
        return [historyTheme, scienceTheme, literatureTheme];
    },
    
    getThemeByName: function(themeName) {
        const themes = this.getAllThemes();
        return themes.find(theme => theme.name === themeName);
    }
};
