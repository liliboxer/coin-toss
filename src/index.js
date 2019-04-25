import getHeadsOrTails from '../src/get-heads-or-tails.js';

// reference the DOM elements you need
const flipButton = document.getElementById('flip-button');
const winsResults = document.getElementById('wins');
const lossesResuts = document.getElementById('losses');
const messageResults = document.getElementById('message-results');
const headsChoice = document.getElementById('heads-choice');
const tailsChoice = document.getElementById('tails-choice');


// initialize


// subscribe - > add event listeners 
flipButton.addEventListener('click', () => {
    const randomNumber = Math.random();
    const flip = getHeadsOrTails(randomNumber);



}); 

