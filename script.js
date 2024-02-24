// Selecting the necessary HTML elements
const inputField = document.querySelector('#ip');
const guessButton = document.querySelector('#but button');
const guessesPara = document.querySelector('.lower p');

// Variables to hold the number of guesses and the correct number
let numOfGuesses = 0;
let correctNumber = Math.floor(Math.random() * 100) + 1;

// Function to handle the guess
function handleGuess() {
    const userGuess = Number(inputField.value);
    
    // Increase the number of guesses
    numOfGuesses++;
    
    // Give feedback and update the number of guesses in the paragraph
    if (userGuess === correctNumber) {
        alert('Congratulations! You guessed the right number!');
        guessesPara.textContent = 'Number of guesses: ' + numOfGuesses;
        resetGame();
    } else if (userGuess < correctNumber) {
        alert('Try a larger number.');
        guessesPara.textContent = 'Number of guesses: ' + numOfGuesses;
    } else if (userGuess > correctNumber) {
        alert('Try a smaller number.');
        guessesPara.textContent = 'Number of guesses: ' + numOfGuesses;
    }
    
    // Clear the input field for the next guess
    inputField.value = '';
    inputField.focus();
}

// Function to reset the game
function resetGame() {
    correctNumber = Math.floor(Math.random() * 100) + 1;
    numOfGuesses = 0;
    guessesPara.textContent = 'Number of guesses: ' + numOfGuesses;
}

// Add event listener to the guess button
guessButton.addEventListener('click', handleGuess);
