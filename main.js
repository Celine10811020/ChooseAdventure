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

document.addEventListener('DOMContentLoaded', () => {
  updateResources();
  loadScenario(0);
});

function showChallenge(challenge, callback) {
  const challengeText = document.getElementById('challengeText');
  const completeButton = document.getElementById('challengeCompleteButton');

  challengeText.innerHTML = `${challenge}`;
  document.getElementById('challengeModal').style.display = 'block';

  completeButton.onclick = () => {
   closeChallenge()
   callback();
  };
}
function closeChallenge() {
  document.getElementById('challengeModal').style.display = 'none';
}

function showImage(name) {
  console.log(name);
  var image = document.getElementById('image');
  image.src = "./Picture/" + name + ".jpg";
  document.getElementById('showImg').style.display = 'block';
}
function closeImage() {
  document.getElementById('showImg').style.display = 'none';
}

function showVedio(name) {
  var popupIframe = document.getElementById('vedioIframe');
  popupIframe.src = "./Vedio/" + name + ".mp4";
  document.getElementById('showVedio').style.display = 'block';
}
function closeVedio() {
  var popupIframe = document.getElementById('vedioIframe');
  popupIframe.src = '';
  document.getElementById('showVedio').style.display = 'none';
}
