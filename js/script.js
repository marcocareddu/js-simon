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
