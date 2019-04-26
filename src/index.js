import getHeadsOrTails from '../src/get-heads-or-tails.js';

// reference the DOM elements you need
const flipButton = document.getElementById('flip-button');
const winsResults = document.getElementById('wins');
const lossesResuts = document.getElementById('losses');
const messageResults = document.getElementById('message-results');
const headsChoice = document.getElementById('heads-choice');
const tailsChoice = document.getElementById('tails-choice');
const coinImage = document.getElementById('coin');

// initialize

let wins = 0;
let losses = 0;

// subscribe - > add event listeners 
flipButton.addEventListener('click', () => {
    const randomNumber = Math.random();
    const flip = getHeadsOrTails(randomNumber);
    
    coinImage.src = './assets/' + flip + '.png';

    let guess = '';
    if(headsChoice.checked) {
        guess = 'heads';
    } else {
        guess = 'tails';
    }

    if(flip === guess) {
        messageResults.textContent = 'You Won!';
        wins ++;
        winsResults.textContent = 'Wins: ' + wins;

    } else {
        messageResults.textContent = 'You Lost!';
        losses ++;
        lossesResuts.textContent = 'Loses: ' + losses;
    }

}); 

