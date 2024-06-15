function loadScenario(index) {
    const scenario = scenarios[index];
    const scenarioText = document.getElementById('scenarioText');
    const optionsContainer = document.getElementById('options');
    scenarioText.innerHTML = scenario.text;
    optionsContainer.innerHTML = '';

    scenario.options.forEach(option => {
        const optionContainer = document.createElement('div');
        optionContainer.className = 'option-container';

        const button = document.createElement('button');
        button.className = 'option-button';
        button.textContent = option.text;
        button.addEventListener('click', () => {
            if (option.next <= 34) {
                showChallenge(option.challenge, () => {
                    resources.food += option.effects.food || 0;
                    resources.water += option.effects.water || 0;
                    resources.energy += option.effects.energy || 0;
                    resources.time += option.effects.time || 0;
                    updateResources();
                    loadScenario(option.next);
                });
            } else {
                document.location.reload();
            }
        });

        const consequence = document.createElement('div');
        consequence.className = 'consequence';
        consequence.textContent = `${option.consequence}`;

        optionContainer.appendChild(button);
        optionContainer.appendChild(consequence);
        optionsContainer.appendChild(optionContainer);
    });
}

function updateResources() {
    document.getElementById('food').textContent = resources.food;
    document.getElementById('energy').textContent = resources.energy;
    document.getElementById('time').textContent = resources.time;
}

function showChallenge(challenge, callback) {
    const modal = document.getElementById('challengeModal');
    const challengeText = document.getElementById('challengeText');
    const completeButton = document.getElementById('challengeCompleteButton');
    const closeButton = document.getElementById('close-button');

    challengeText.innerHTML = `${challenge}`;
    modal.style.display = 'block';

    completeButton.onclick = () => {
        modal.style.display = 'none';
        callback();
    };

    closeButton.onclick = () => { 
        modal.style.display = 'none';
    };
}

document.addEventListener('DOMContentLoaded', () => {
    updateResources();
    loadScenario(0);
});
