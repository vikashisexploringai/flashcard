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
        
        // Try to restore saved state for this theme
        const restored = this.restoreState();
        if (!restored) {
            this.renderCard();
            this.updateProgress();
            this.updateNavigation();
        }
        this.saveState(); // Add this line
    },
    
  renderCard: function() {
    const card = this.currentTheme.flashcards[this.currentCardIndex];
    document.getElementById('questionText').textContent = card.question;
    
    // Handle paragraph formatting with proper line breaks
    const paragraphText = document.getElementById('paragraphText');
    if (card.paragraph.includes('\n')) {
        // Replace line breaks with HTML breaks and add some spacing
        paragraphText.innerHTML = card.paragraph.replace(/\n/g, '<br><br>');
    } else {
        paragraphText.textContent = card.paragraph;
    }
    
    document.getElementById('currentThemeName').textContent = this.currentTheme.name;
    
    // Reset card to front side and scroll to top
    document.getElementById('flashcard').classList.remove('flipped');
    paragraphText.scrollTop = 0; // Reset scroll position
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
            this.saveState(); // Add this line
        }
    },
    
    previousCard: function() {
        if (this.currentCardIndex > 0) {
            this.currentCardIndex--;
            this.renderCard();
            this.updateProgress();
            this.updateNavigation();
            this.saveState(); // Add this line
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
    },
    
    // Add this method
    saveState: function() {
        if (this.currentTheme) {
            sessionStorage.setItem('flashcardState', JSON.stringify({
                themeId: this.currentTheme.id,
                cardIndex: this.currentCardIndex
            }));
        }
    },
    
    // Add this method - returns true if state was restored
    restoreState: function() {
        const saved = sessionStorage.getItem('flashcardState');
        if (saved && this.currentTheme) {
            try {
                const state = JSON.parse(saved);
                // You'll need to find the theme by ID - adjust based on your theme structure
                if (state.themeId === this.currentTheme.id) {
                    this.currentCardIndex = state.cardIndex;
                    this.renderCard();
                    this.updateProgress();
                    this.updateNavigation();
                    sessionStorage.removeItem('flashcardState');
                    return true;
                }
            } catch(e) {}
        }
        return false;
    }
};
