const vocabularyTheme = {
    id: 'vocabulary',
    name: 'Vocabulary',
    description: 'Important vocabulary words and their meanings',
    flashcards: [
        {
            question: 'What does "ephemeral" mean?',
            paragraph: 'Ephemeral means lasting for a very short time. It describes something transient, fleeting, or short-lived. For example: "The ephemeral beauty of cherry blossoms lasts only a few days each spring." The term comes from Greek "ephemeros" meaning "lasting only a day."'
        },
        {
            question: 'Define "ubiquitous"',
            paragraph: 'Ubiquitous means present, appearing, or found everywhere. It describes something that seems to be omnipresent. For example: "Smartphones have become ubiquitous in modern society, with almost everyone carrying one." The word originates from Latin "ubique" meaning "everywhere."'
        },
        {
            question: 'What is the meaning of "ambiguous"?',
            paragraph: 'Ambiguous means open to more than one interpretation; having a double meaning or being unclear. For example: "His ambiguous statement left everyone confused about his true intentions." It comes from Latin "ambigere" meaning "to doubt" or "to go about."'
        }
    ]
};

ThemeLoader.registerTheme(vocabularyTheme);
