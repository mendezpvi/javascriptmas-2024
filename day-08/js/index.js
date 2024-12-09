import { renderKeyboard } from './keyboard.js'

const guessContainer = document.getElementById('guess-container')
const snowmanParts = [...document.getElementsByClassName('snowman-part')]
const attempts = document.getElementById('attemps')

const word = "gift"
let guesses = 6
let errorCounter = 0

let guessedLetters = word.split('').map(() => '_')



function disabledButtons() {
    const allButtons = document.querySelectorAll('#keyboard-container button')
    allButtons.forEach(button => button.disabled = true)
}

function hideWord() {
    guessContainer.textContent = guessedLetters.join(' ')
}

function resetSnowman() {
    snowmanParts.forEach(part => part.style.visibility = 'visible')
    guesses = 6
}

function checkGuess(e) {
    let letter = e.target.id

    if (e.target.tagName !== 'BUTTON') return

    e.target.disabled = true


    if (word.includes(letter)) {
        word.split('').forEach((char, index) => {
            if (char === letter) guessedLetters[index] = letter
        })
    } else {
        guesses--
        renderAttempts()
        if (guesses < snowmanParts.length) {
            const partToHide = snowmanParts[snowmanParts.length - 1 - errorCounter]
            partToHide.style.visibility = 'hidden'
            errorCounter++
        }
    }

    guessContainer.textContent = guessedLetters.join(' ')


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
