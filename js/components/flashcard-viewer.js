const FlashcardViewer = {
    currentTheme: null,
    currentCardIndex: 0,
    
    init: function() {
        this.bindEvents();
    },
    
    bindEvents: function() {
        document.getElementById('flipBtn').addEventListener('click', () => this.flipCard());
        document.getElementById('nextBtn').addEventListener('click', () => this.nextCard());
        document.getElementById('prevBtn').addEventListener('click', () => this.previousCard());
        document.getElementById('backToThemes').addEventListener('click', () => this.backToThemes());
        
        // Click on card to flip
        document.getElementById('flashcard').addEventListener('click', () => this.flipCard());
    },
    
    startTheme: function(theme) {
        this.currentTheme = theme;
        this.currentCardIndex = 0;
        this.renderCard();
        this.updateProgress();
        this.updateNavigation();
    },
    
    renderCard: function() {
        const card = this.currentTheme.flashcards[this.currentCardIndex];
        document.getElementById('questionText').textContent = card.question;
        document.getElementById('paragraphText').textContent = card.paragraph;
        document.getElementById('currentThemeName').textContent = this.currentTheme.name;
        
        // Reset card to front side
        document.getElementById('flashcard').classList.remove('flipped');
    },
    
    flipCard: function() {
        document.getElementById('flashcard').classList.toggle('flipped');
    },
    
    nextCard: function() {
        if (this.currentCardIndex < this.currentTheme.flashcards.length - 1) {
            this.currentCardIndex++;
            this.renderCard();
            this.updateProgress();
            this.updateNavigation();
        }
    },
    
    previousCard: function() {
        if (this.currentCardIndex > 0) {
            this.currentCardIndex--;
            this.renderCard();
            this.updateProgress();
            this.updateNavigation();
        }
    },
    
    updateProgress: function() {
        const progressText = `Card ${this.currentCardIndex + 1} of ${this.currentTheme.flashcards.length}`;
        document.getElementById('progressText').textContent = progressText;
    },
    
    updateNavigation: function() {
        document.getElementById('prevBtn').disabled = this.currentCardIndex === 0;
        document.getElementById('nextBtn').disabled = this.currentCardIndex === this.currentTheme.flashcards.length - 1;
    },
    
    backToThemes: function() {
        ThemeSelector.showScreen('themeScreen');
    }
};
