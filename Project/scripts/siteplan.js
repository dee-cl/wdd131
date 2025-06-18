const themeToggleButton = document.getElementById('themeToggle');
const backgroundDiv = document.querySelector('.background');
const themeToggleImage = themeToggleButton.querySelector('img');
const doorDiv = document.querySelector('.door');
const cardContainerValidation = document.querySelector('.card-container')

function setDarkTheme(isDark) {

    if (isDark) {
        document.body.classList.add('dark-mode');
        backgroundDiv.classList.add('dark-mode');
        themeToggleImage.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
       
    }
    else {
        document.body.classList.remove('dark-mode');
        backgroundDiv.classList.remove('dark-mode');
        themeToggleImage.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
        
    }
}
function setdarkspecific(Isdark) {
    if (doorDiv === ".door")
        if (Isdark) {
            doorDiv.classList.add('dark-mode');
        }
        else {
            doorDiv.classList.remove('dark-mode');
        }
}


const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    setDarkTheme(true);
} else {
    setDarkTheme(false);
}

themeToggleButton.addEventListener('click', () => {
    const isCurrentlyDark = document.body.classList.contains('dark-mode');
    setDarkTheme(!isCurrentlyDark); 
});

const year = document.querySelector("#year");
year.innerHTML = new Date().getFullYear();

const lastModified = document.querySelector("#lastModified");
lastModified.innerHTML = new Date(document.lastModified).toLocaleString();

document.addEventListener('DOMContentLoaded', async () => {
    const cardContainer = document.getElementById("creature-cards-container");
    if (!cardContainer) {
        return;
    }
    let creatures = [];

    try {
        const response = await fetch("./creatures.json");
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        creatures = await response.json();

    } catch (error) {
        console.error("Error Loading Creature data:", error)
        return
    }

    function loadsimplecards(creaturelist = creatures) {
        
        cardContainer.innerHTML = "";
        creaturelist.forEach(creature => {
            const card = document.createElement("div");
            card.dataset.creatureName = creature.name;
            card.classList.add("card")
            card.innerHTML = `
        <div class="card-head">
            <h2>${creature.name} - CR ${creature.cr} (${creature.xp})</h2>
        </div>
        <div class="card-body">
            <p><strong>Armor Class: </strong> ${creature.armor.value} (${creature.armor.type}) \n${creature.armor.notes} </p>
            <p><strong>Hit Points: </strong> ${creature.hp.average} (${creature.hp.formula})</p>
            <p><strong>Speed: </strong> Walk ${creature.speed.walk} ft.${creature.speed.climb ? ', Climb ' + creature.speed.climb + ' ft.' : ''}${creature.speed.burrow ? ', Burrow ' + creature.speed.burrow + ' ft.' : ''}${creature.speed.fly ? ', Fly ' + creature.speed.fly + ' ft.' : ''}${creature.speed.swim ? ', Swim ' + creature.speed.swim + ' ft.' : ''}</p>
            ${creature.description ? `<p class="card-description">${creature.description}</p>` : ''}
            ${creature.tags && creature.tags.length > 0 ? `
                <h3>tags:</h3>
                <p>${creature.tags.map(tags => `${tags}`).join(', ')}` : ''}</p>
            ${creature.habitat && creature.habitat.length > 0 ? `
                <h3>Biomes:</h3>
                <p>${creature.habitat.map(habitat => `${habitat}`).join(', ')}` : ''}</p>
                           
        </div>`;
            cardContainer.appendChild(card)
        });
    }
    function loadcompletecards(creature) {
        cardContainer.innerHTML = "";
        const completeCard = document.createElement("div");
        completeCard.classList.add("complete-card");
        completeCard.innerHTML = `
        <div class="card-large">
            <button id="return" class="return-button"><strong>← Back to Beastiary</strong></button>
            <div class="card-head">
                    <h2>${creature.name} - CR ${creature.cr} (${creature.xp})</h2>
                    <img src="${creature.image_url}" alt="${creature.name} image" loading="lazy">
                </div>
                <div class="card-body">
                    <p><strong>Size: </strong>${creature.size}    <strong>Type: </strong>${creature.type}    <strong>Alignment: </strong>${creature.alignment}</p>
                    
                    ${creature.senses && creature.senses.length > 0 ? `
                            <h3><strong>Senses: </strong></h3>
                            <p>${creature.senses.map(sense => `
                                ${sense}
                            `).join('')}
                        ` : ''}</p>
                    <p><strong>Hit Points: </strong> ${creature.hp.average} (${creature.hp.formula})    <strong>Armor Class: </strong> ${creature.armor.value} (${creature.armor.type}) \n${creature.armor.notes} </p>
                    <p><strong>Speed: </strong> Walk ${creature.speed.walk} ft.${creature.speed.burrow ? ', Burrow ' + creature.speed.burrow + ' ft.' : ''}${creature.speed.fly ? ', Fly ' + creature.speed.fly + ' ft.' : ''}${creature.speed.swim ? ', Swim ' + creature.speed.swim + ' ft.' : ''}</p>
                    ${creature.languages && creature.languages.length > 0 ? `
                            <h3><strong>Languages: </strong></h3>
                            <p>${creature.languages.map(language => `
                                ${language}
                            `).join('')}
                        ` : ''}</p>
                    <h3>Stats:</h3>
                    <ul class="stats">
                        <li><strong>STR: </strong>${creature.stats.strength}</li>
                        <li><strong>DEX: </strong>${creature.stats.dexterity}</li>
                        <li><strong>CON: </strong>${creature.stats.constitution}</li>
                        <li><strong>INT: </strong>${creature.stats.intelligence}</li>
                        <li><strong>WIS: </strong>${creature.stats.wisdom}</li>
                        <li><strong>CHA: </strong>${creature.stats.charisma}</li>
                    </ul>
                        ${creature.vulnerabilities && creature.vulnerabilities.length > 0 ? ` 
                                <h3>Vulnerabilities: </h3>
                                <ul class="vulnerabilities">
                                ${creature.vulnerabilities.map(vulnerabilities => `
                                <li><strong>${vulnerabilities}</strong></li>
                                `).join('')}
                                ` : ''} 
                                </ul>
                        ${creature.resistances && creature.resistances.length > 0 ? ` 
                                <h3>Resistances: </h3>
                                <ul class="resistances">
                                ${creature.resistances.map(resistances => `
                                <li><strong>${resistances}</strong></li>
                                `).join('')}
                                ` : ''} 
                                </ul>
                        ${creature.immunities && creature.immunities.length > 0 ? ` 
                                <h3>Immunities: </h3>
                                <ul class="immunities">
                                ${creature.immunities.map(immunities => `
                                <li><strong>${immunities}</strong></li>
                                `).join('')}
                                ` : ''} 
                                </ul>
                        ${creature.condition_immunities && creature.condition_immunities.length > 0 ? ` 
                                <h3>Condition Immunities: </h3>
                                <ul class="condition_immunities">
                                ${creature.condition_immunities.map(condition_immunities => `
                                <li><strong>${condition_immunities}</strong></li>
                                `).join('')}
                                ` : ''} 
                                </ul>
                        
                    ${creature.abilities && creature.abilities.length > 0 ? `
                            <h3>Abilities: </h3>
                            ${creature.abilities.map(ability => `
                                <p><strong>${ability.name}:</strong> ${ability.description}</p>
                            `).join('')}
                        ` : ''}

                        ${creature.actions && creature.actions.length > 0 ? `
                            <h3>Actions: </h3>
                            ${creature.actions.map(action => `
                                <p><strong>${action.name}:</strong> ${action.description}</p>
                            `).join('')}
                        ` : ''}

                        ${creature.legendary_actions && creature.legendary_actions.length > 0 ? `
                            <h3>legendary_actions: ${legendary_actions_count}</h3>
                            ${creature.legendary_actions.map(legendary_action => `
                                <p><strong>${legendary_action.name}:</strong> ${legendary_action.description}</p>
                            `).join('')}
                        ` : ''}

                        ${creature.legendary_actions && creature.legendary_actions.length > 0 ? `
                            <h3>legendary_actions: </h3>
                            ${creature.legendary_actions.map(legendary_action => `
                                <p><strong>${legendary_action.name}:</strong> ${legendary_action.description}</p>
                            `).join('')}
                        ` : ''}
                        ${creature.legendary_resistances && creature.legendary_resistances.length > 0 ? `
                            <h3>legendary_resistances: </h3>
                            ${creature.legendary_resistances.map(legendary_resistances => `
                                <p><strong>${legendary_resistances.name}:</strong> ${legendary_resistances.description}</p>
                            `).join('')}
                        ` : ''}
                        ${creature.special_abilities && creature.special_abilities.length > 0 ? `
                            <h3>special_abilities: </h3>
                            ${creature.special_abilities.map(special_abilities => `
                                <p><strong>${special_abilities.name}:</strong> ${special_abilities.description}</p>
                            `).join('')}
                        ` : ''}
                        ${creature.reactions && creature.reactions.length > 0 ? `
                            <h3>reactions: </h3>
                            ${creature.reactions.map(reactions => `
                                <p><strong>${reactions.name}:</strong> ${reactions.description}</p>
                            `).join('')}
                        ` : ''}
                        ${creature.description ? `<p class="card-description">${creature.description}</p>` : ''}
                    </div>
                </div>
            </div>
        `;
        cardContainer.appendChild(completeCard);

        document.getElementById('return').addEventListener('click', showAllCreatures);
    }
    function showAllCreatures() {

            loadsimplecards(creatures);

    }
    showAllCreatures(); 

    cardContainer.addEventListener('click', (event) => {
        const clickedCard = event.target.closest('.card'); 
        if (clickedCard) {
            const creatureName = clickedCard.dataset.creatureName; 
            const selectedCreature = creatures.find(c => c.name === creatureName);
            if (selectedCreature) {
                loadcompletecards(selectedCreature);
            }
        }
    });

});
document.addEventListener('DOMContentLoaded', async () => {
    const armorTableContainer = document.getElementById("armor-table-container");
    if (!armorTableContainer) {
        return;
    }
    let armoryList = [];

    try {
        const response = await fetch("./armors.json");
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        armoryList = await response.json();

    } catch (error) {
        console.error("Armor data:", error)
        return
    }
    
    function makeArmorTable(armorList = armoryList) {
        armorTableContainer.innerHTML = "";
        const armorTable = document.createElement("table");
        armorTable.classList.add("armor");
        armorTable.innerHTML = `
        <thead>
            <tr>
                <th>Armor name</th>
                <th>Type</th>
                <th>classification</th>
                <th>Damage Reduction</th>
                <th>Resistances</th>
                <th>Exceptions</th>
                <th>Special</th>
                <th>Disadvanage on stealth</th>
                <th>Rarity</th>
                <th>Weight</th>
                <th>Cost</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
        `;
        const tbody = armorTable.querySelector("tbody");
        armorList.forEach(armor => {
            const row = document.createElement("tr");
            row.innerHTML = `
            <td>${armor.name}</td>
            <td>${armor.item_type}</td>           
            <td>${armor.armor_type}</td>           
            <td>${armor.dr || ""}</td>                   
            <td>${Array.isArray(armor.specific_resistances) ? armor.specific_resistances.join(', ') : armor.specific_resistances || ""}</td> 
            <td>${Array.isArray(armor.exceptions) ? armor.exceptions.join(', ') : armor.exceptions || ""}</td>
            <td>${armor.special_properties ? `
            <div class="cell-content">
                ${armor.special_properties}
                <span class="hover-text">${armor.description}</span>
            </div>
        ` : ""}</td>
            <td>${armor.disadvantage_on_stealth ? "Yes" : "No"}</td> 
            <td>${armor.rarity || ""}</td>
            <td>${armor.weight_lbs || ""}</td>           
            <td>${armor.cost_gp || ""}</td>              
            `;
            tbody.appendChild(row);
        })
        
        armorTableContainer.appendChild(armorTable);
    }
    makeArmorTable()
    });