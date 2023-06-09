console.log('JS OK')

// * Functions*********************
// Generata random numbers array
function generateNumbers(numbers) {
    const generatedNumbers = [];
    let randomNumber
    do {
        randomNumber = Math.floor(Math.random() * 100) + 1;
        generatedNumbers.push(randomNumber);
    } while (generatedNumbers.includes(randomNumber) && generatedNumbers.length !== numbers);
    return generatedNumbers;
}

// * PHASE 1
// Link DOM elements
const countdownElement = document.querySelector('.timer');
const numbersContainer = document.querySelector('.numbers-container');
const calcButton = document.querySelector('btn');

// Variables
const extractedNumbers = [];
let toInject = '';
const countdownSeconds = 10;
const seconds = countdownSeconds * 1000;