var dinnerChoices = [
  "Soy and Ginger-glazed Tofu",
  "The Blockchain",
  "10,000 Suffering Souls",
  "Avgolemono Soup"
];

var sideChoices = [
  "A Single Almond",
  "Aquarium Gravel",
  "Sweet Potato Fries",
  "Spring Salad"
];

var dessertChoices = [
  "Your Billionaire of Choice",
  "Carrot Cake",
  "Black Cherry Ice Cream", 
  "A Collection of Vintage Souvenir Coins"
];

var letsCookButton = document.querySelector('#cook');
var clearButton = document.querySelector('#clear');
var sideOption = document.querySelector('#side');
var mainOption = document.querySelector('#main');
var dessertOption = document.querySelector('#dessert');
var mealOption = document.querySelector('#meal')
var cookpot = document.querySelector('svg');
var randomDish = document.querySelector('#randomDish');
var radioOutput = document.querySelectorAll('input[type = "radio"]');

letsCookButton.addEventListener('click', getCooking);
clearButton.addEventListener('click', clearSuggestion);
sideOption.addEventListener('change', displayRadioValue);
mainOption.addEventListener('change', displayRadioValue);
dessertOption.addEventListener('change', displayRadioValue);

var dishToShow;
function randomChoice(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function displayRadioValue(radioOutput) {
  var selectedDish = '';
  var radioOutput = document.querySelectorAll('input[type="radio"]');
  for (var i = 0; i < radioOutput.length; i++) {
    if (radioOutput[i].checked) {
      selectedDish = radioOutput[i].value;
    }
  }
  return selectedDish;
}

function sortChoice(selectedDish) {
  if (selectedDish === "side") {
    dishToShow = randomChoice(sideChoices);
  } else if (selectedDish === "main") {
    dishToShow = randomChoice(dinnerChoices); 
  } else if (selectedDish === "dessert") {
    dishToShow = randomChoice(dessertChoices);
  } else {
    dishToShow = 'A different choice!';
  }
  return dishToShow;
}

function getCooking() {
  selectedDish = displayRadioValue();
  cookpot.style.height = '0%';
  cookpot.style.width = '0%';
  dishToShow = sortChoice(selectedDish);
  return randomDish.innerText = `You should make: ${dishToShow}!`;
}

function clearSuggestion() {
  clearButton.style.visibility = 'hidden';
  cookpot.style.width = '50%';
  cookpot.style.height = '50%';
  selectedDish = '';
  dishToShow = '';
  randomDish.innerText = '';
  randomDish.classList.visibility = 'hidden';
}
