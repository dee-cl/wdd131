



const creatures = [
    { name: 'Goblin', type: 'Humanoid', environment: 'Caves, Forests', description: 'Small, green-skinned humanoids known for their cunning and cowardice. Often found in tribal groups.' },
    { name: 'Owlbear', type: 'Beast', environment: 'Forests, Mountains', description: 'A terrifying fusion of an owl and a bear, known for its fierce territoriality and powerful beak.' },
    { name: 'Mimic', type: 'Aberration', environment: 'Dungeons, Abandoned Places', description: 'A shapeshifting predator that disguises itself as an inanimate object, typically a chest or door.' },
    { name: 'Dragon (Young Red)', type: 'Dragon', environment: 'Mountains, Volcanic Regions', description: 'A fearsome winged reptile, known for its fiery breath and immense greed. Highly intelligent and dangerous.' }
];

const magicItems = [
    { name: 'Potion of Healing', type: 'Potion', rarity: 'Common', description: 'Restores a small amount of health. A staple for any adventurer.' },
    { name: 'Cloak of Elvenkind', type: 'Wondrous Item', rarity: 'Uncommon', description: 'Grants advantage on Dexterity (Stealth) checks, especially in natural surroundings.' },
    { name: 'Bag of Holding', type: 'Wondrous Item', rarity: 'Uncommon', description: 'A seemingly ordinary bag that contains an extradimensional space, holding far more than its exterior suggests.' },
    { name: 'Sword of Sharpness', type: 'Weapon (Longsword)', rarity: 'Rare', description: 'A magical sword that can deal extra slashing damage and sever limbs on a critical hit.' }
];

const alchemicalSupplies = [
    { name: 'Alchemist\'s Fire', type: 'Grenade (Simple)', rarity: 'Common', description: 'A sticky, combustible fluid that ignites on impact, dealing fire damage.' },
    { name: 'Antitoxin', type: 'Consumable', rarity: 'Common', description: 'Grants advantage on saving throws against poison for a short duration.' },
    { name: 'Smokepowder', type: 'Explosive', rarity: 'Rare', description: 'A volatile magical powder that detonates with great force, creating a devastating explosion.' }
];

// --- DOM Interaction: Selecting Elements ---
const creatureListContainer = document.getElementById('creatureList');
const magicItemListContainer = document.getElementById('magicItemList');
const alchemyListContainer = document.getElementById('alchemyList');
const themeToggleButton = document.getElementById('themeToggle');

// --- Function to Create a Card (Uses Template Literals) ---
function createCard(item) {
    // Exclusively use template literals for string building
    return `
        <div class="card">
            <h3>${item.name}</h3>
            <p><strong>Type:</strong> ${item.type || 'N/A'}</p>
            ${item.rarity ? `<p><strong>Rarity:</strong> ${item.rarity}</p>` : ''}
            ${item.environment ? `<p><strong>Environment:</strong> ${item.environment}</p>` : ''}
            <p>${item.description}</p>
        </div>
    `;
}

// --- Function to Render Lists (Uses Array Methods, DOM Modification) ---
function renderList(data, container) {
    // Use map to transform each item into its HTML string, then join them
    const htmlString = data.map(item => createCard(item)).join('');
    container.innerHTML = htmlString; // Modify the DOM
}

// --- Initial Render of Content ---
renderList(creatures, creatureListContainer);
renderList(magicItems, magicItemListContainer);
renderList(alchemicalSupplies, alchemyListContainer);

// --- Dark Mode Toggle Logic (DOM Interaction, Conditional Branching, localStorage) ---

// Function to set the theme
function setDarkTheme(isDark) {
    // Conditional Branching
    if (isDark) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark'); // Store preference in localStorage
        themeToggleButton.textContent = 'Toggle Bright Mode'; // Modify button text
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light'); // Store preference in localStorage
        themeToggleButton.textContent = 'Toggle Dark Mode'; // Modify button text
    }
}

// Check localStorage on page load to apply saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') { // Conditional Branching
    setDarkTheme(true);
} else {
    setDarkTheme(false); // Default to light if no preference or 'light'
}

// Listen for click event on the toggle button
themeToggleButton.addEventListener('click', () => {
    // Conditional Branching: Check current state
    const isCurrentlyDark = document.body.classList.contains('dark-mode');
    setDarkTheme(!isCurrentlyDark); // Toggle the theme
});