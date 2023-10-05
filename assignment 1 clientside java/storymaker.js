// Variables for pre-defined arrays
const nouns = ['dog', 'cat', 'bird', 'fish', 'elephant'];
const verbs = ['runs', 'jumps', 'flies', 'swims', 'crawls'];
const adjectives = ['happy', 'sad', 'angry', 'excited', 'bored'];
const settings = ['beach', 'mountain', 'forest', 'desert', 'city'];

// Variables to store selected words
let selectedNoun = '';
let selectedVerb = '';
let selectedAdjective = '';
let selectedSetting = '';

// Button event listeners
document.getElementById('btnNoun').addEventListener('click', () => {
    selectedNoun = nouns[Math.floor(Math.random() * nouns.length)];
    document.getElementById('displayNoun').textContent = selectedNoun;
});

document.getElementById('btnVerb').addEventListener('click', () => {
    selectedVerb = verbs[Math.floor(Math.random() * verbs.length)];
    document.getElementById('displayVerb').textContent = selectedVerb;
});

document.getElementById('btnAdjective').addEventListener('click', () => {
    selectedAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    document.getElementById('displayAdjective').textContent = selectedAdjective;
});

document.getElementById('btnSetting').addEventListener('click', () => {
    selectedSetting = settings[Math.floor(Math.random() * settings.length)];
    document.getElementById('displaySetting').textContent = selectedSetting;
});

document.getElementById('btnRandom').addEventListener('click', () => {
    const randomStory = `${nouns[Math.floor(Math.random() * nouns.length)]} ${verbs[Math.floor(Math.random() * verbs.length)]} ${adjectives[Math.floor(Math.random() * adjectives.length)]} ${nouns[Math.floor(Math.random() * nouns.length)]} ${settings[Math.floor(Math.random() * settings.length)]}`;
    document.getElementById('displayStory').textContent = randomStory;
});

