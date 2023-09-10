var dinnerChoices = [
    "Soy and Ginger-glazed Tofu",
    "The Blockchain",
    "10,000 Suffering Souls",
    "Avgolemono Soup"
]

var sideChoices = [
    "A Single Almond",
    "Aquarium Gravel",
    "Sweet Potato Fries",
    "Spring Salad"
]

var dessertChoices = [
    "Your Billionaire of Choice",
    "Carrot Cake",
    "Black Cherry Ice Cream", 
    "A Collection of Vintage Souvenir Coins"
]



// need query selectors
var letsCookButton = document.querySelector('#cook');
var clearButton = document.querySelector('#clear');
var sideOption = document.querySelector('#side');
var mainOption = document.querySelector('#main');
var dessertOption = document.querySelector('#dessert');
var cookpot = document.querySelector('svg');

// need event listeners
letsCookButton.addEventListener('click', );
clearButton.addEventListener('click', showCookButton);
sideOption.addEventListener('click', showCookButton);
mainOption.addEventListener('click', showCookButton);
dessertOption.addEventListener('click', );

// need functions to be event handlers

function getRandomFood(array) {
    return Math.floor(Math.random() * array.length);
  }

// enable visibility of let's cook button if a radio option is selected
function showCookButton() {
    if (letsCookButton.classList.contains('hidden')) {
        letsCookButton.classList.remove('hidden');
    }
}

// hide cookpot image, display clear button, and display text when let's cook button is clicked
function getCooking() {
    cookpot.classList.add('hidden');
    clearButton.classList.remove('hidden');
    return `You should make: ${}!`;
}

// clear text and unhide cookpot image when clear button is clicked, then hide clear button