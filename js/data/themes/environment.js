const environmentTheme = {
    id: 'environment',
    name: 'Environmemt Questions',
    description: 'Important Questions from Environment',
    flashcards: [
        {
    question: "What are sentinel species? Explain their role in environmental monitoring with suitable examples. How does the recent declaration of the emperor penguin as an endangered species highlight this concept?",
    paragraph: `A sentinel species is a species whose members' health signals the condition of the ecosystem in which they live. Scientists monitor them because they are among the first to respond to environmental stressors such as pollution and disease, and their response tends to be more apparent than in other species. Thus, they provide early warnings of ecosystem decline.

Sentinel species typically occupy fixed territories, live long enough to accumulate toxins, and have physiologies that amplify environmental changes. Frogs are a common example — their permeable skin absorbs pesticides and pathogens, making a declining frog population an early sign of wider ecological stress. Canaries in coal mines worked on the same principle; their faster metabolism made them succumb to carbon monoxide before human miners noticed anything. Researchers also use honeybees to track agricultural chemical loads, polar bears to monitor Arctic contaminant accumulation, and certain fish to detect industrial runoff.

Recently, the International Union for Conservation of Nature declared the emperor penguin an endangered species. Emperor penguins are sentinel species for warming in the Antarctic region. Climate change is projected to halve their population by the 2080s. Their decline signals broader ecosystem disruption, confirming the sentinel species' role as a biological early warning system.`
}
    ]
};

ThemeLoader.registerTheme(environmentTheme);
