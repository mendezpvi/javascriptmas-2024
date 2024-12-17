import { renderKeyboard } from './keyboard.js'

const guessContainer = document.getElementById('guess-container')
const snowmanParts = [...document.getElementsByClassName('snowman-part')]
const attempts = document.getElementById('attemps')

const word = "gift"
let guesses = 6
let errorCounter = 0

// Initialize the guessed letters with underscores for each letter in the word
let guessedLetters = word.split('').map(() => '_')

// Disables all keyboard buttons after the game ends
function disabledButtons() {
    const allButtons = document.querySelectorAll('#keyboard-container button')
    allButtons.forEach(button => button.disabled = true)
}

// Updates the displayed guessed word by joining the guessedLetters array
function hideWord() {
    guessContainer.textContent = guessedLetters.join(' ')
}

// Resets the snowman visual and the number of guesses
function resetSnowman() {
    snowmanParts.forEach(part => part.style.visibility = 'visible')
    guesses = 6
}

// Handles the logic for when a letter button is clicked
function checkGuess(e) {
    let letter = e.target.id /* Get the letter from the clicked button;s id */

    // Ignore clicks that are not on a button
    if (e.target.tagName !== 'BUTTON') return

    e.target.disabled = true

    // Check if the letter is in the word
    if (word.includes(letter)) {
        // Replace underscores with the correctly guessed letter in the guessedLetters array
        word.split('').forEach((char, index) => {
            if (char === letter) guessedLetters[index] = letter
        })
    } else {
        // Decrement guessed and update the attempts display
        guesses--
        renderAttempts()
        if (guesses < snowmanParts.length) {
            const partToHide = snowmanParts[snowmanParts.length - 1 - errorCounter]
            partToHide.style.visibility = 'hidden'
            errorCounter++
        }
    }

    // Update the displayed guessed word
    guessContainer.textContent = guessedLetters.join(' ')

    // Check for win or lose conditions
    if (!guessedLetters.includes('_')) {
        document.querySelector('.sunglasses').style.visibility = 'visible'
        setTimeout(() => guessContainer.textContent = `You Win! 🥳`, 2000)

        disabledButtons()
        resetSnowman()
    } else if (guesses === 0) {
        guessContainer.innerHTML = `You Lose! 😭<br>The word was ${word.toUpperCase()}`
        disabledButtons()
    }
}

function renderAttempts() {
    attempts.textContent = `You have ${guesses} attempts left.`
}


document.getElementById('keyboard-container').addEventListener('click', checkGuess)
renderKeyboard()
hideWord()
renderAttempts()
