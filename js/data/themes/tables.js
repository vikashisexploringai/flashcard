const tablesTheme = {
    id: 'tables',
    name: 'Multiplication Tables',
    description: 'Essential multiplication tables for quick recall',
    flashcards: [
        {
            question: 'What is 7 × 8?',
            paragraph: '7 × 8 = 56. This is one of the most commonly used multiplication facts in elementary mathematics and forms the basis for many calculations. Remember: "5-6-7-8" - 56 = 7 × 8.'
        },
        {
            question: 'What is 9 × 6?',
            paragraph: '9 × 6 = 54. A useful trick for the 9 times table: the digits of the product always add up to 9 (5 + 4 = 9). For 9 × 6, you can think of it as 10 × 6 = 60, then subtract 6 to get 54.'
        },
        {
            question: 'What is 12 × 12?',
            paragraph: '12 × 12 = 144. This is an important square number that appears frequently in mathematics, especially in geometry and measurement. It represents the number of square inches in a square foot.'
        }
    ]
};

ThemeLoader.registerTheme(tablesTheme);
