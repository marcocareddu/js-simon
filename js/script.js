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
const calcButton = document.querySelector('.btn');
const inputElements = document.getElementById('input-group');

// Variables
const extractedNumbers = generateNumbers(5);
let toInject = '';
let countdownSeconds = 10;
const seconds = countdownSeconds * 100;

// Generate strings to inject
for (let i = 0; i < extractedNumbers.length; i++) {
    toInject += `<div class="numbers">${extractedNumbers[i]}</div>`;
};

// Inject string
numbersContainer.innerHTML += toInject;

// Create countdown
const countdown = setInterval(function () {
    countdownElement.innerText = --countdownSeconds;
    if (countdownSeconds === 0) {
        countdownElement.innerText = '--';
        clearInterval(countdown);
        const numbers = document.querySelectorAll('div.numbers');

        // Add class d-none to numbers
        for (let i = 0; i < numbers.length; i++) {
            numbers[i].classList.add('d-none');
        }

        // Remove class d-none to button and inputs
        calcButton.classList.remove('d-none');
        inputElements.classList.remove('d-none');
    }
}, seconds);

calcButton.addEventListener('click', function () {

    // Link to input elements
    const input = document.querySelectorAll('input');
    // Create input arrays
    const userInputs = [];

    // Pick value for every input element
    for (let i = 0; i < input.length; i++) {
        userInputs.push(parseInt(input[i].value));
    }
    console.log(userInputs);

    // Verify user inputs are in extracted numbers
    const rightNumbers = howManyInIt(extractedNumbers, userInputs);
    console.log(rightNumbers);

    // Display result in DOM
    countdownElement.innerText = `Hai indovinato ${rightNumbers.length} numeri! ${rightNumbers}`;
}
)