console.log('JS OK')

// * Functions*********************
// Generate random numbers array
function generateNumbers(numbers) {
    const generatedNumbers = [];
    let randomNumber
    do {
        randomNumber = Math.floor(Math.random() * 100) + 1;
        generatedNumbers.push(randomNumber);
    } while (generatedNumbers.includes(randomNumber) && generatedNumbers.length !== numbers);
    return generatedNumbers;
}

// Function how many numbers are in array
function howManyInIt(array1, array2) {
    const rightNumbers = [];
    for (let i = 0; i < array1.length; i++) {
        if (array1.includes(array2[i])) rightNumbers.push(array2[i]);
    }
    return rightNumbers
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

