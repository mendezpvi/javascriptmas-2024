const gameBoard = document.getElementById('game-board');

// Generates the duplicated array of emojis
function generateEmojis() {
  const emojis = ['🎄', '🎁', '🎅', '☃️'];
  return [...emojis, ...emojis]
}

// Suffles the cards randomly
function shuffleCards(arr) {
  return arr.sort(() => Math.random() - 0.5)
}

// Renders the cards on the game board
function renderCards(emojis) {
  gameBoard.innerHTML = emojis
    .map(() => `<div class="card hidden"></div>`) /* Cards start hidden */
    .join('')
}

// Variables to handle the game state
let revealedCards = []
let matchedCards = 0
let emojis = []

// Handles card click logic: revealing and matching
function handleCardClick(e) {
  const clickedCard = e.target
  const cardIndex = Array.from(gameBoard.children).indexOf(clickedCard)

  // Prevent selecting the same card twice or interacting with already revealed cards
  if (
    clickedCard.classList.contains('revealed') ||
    revealedCards.length === 2 ||
    matchedCards === emojis.length
  ) {
    return
  }

  // Reveal the card
  clickedCard.classList.remove('hidden')
  clickedCard.classList.add('revealed')
  clickedCard.textContent = emojis[cardIndex]

  revealedCards.push({ element: clickedCard, value: emojis[cardIndex] })

  // If two cards are revealed, compare them
  if (revealedCards.length === 2) {
    const [firstCard, secondCard] = revealedCards
    if (firstCard.value === secondCard.value) {
      // Keep the cards revealed
      revealedCards = []
      matchedCards += 2
      if (matchedCards === emojis.length) {
        alert('¡Felicidades! Has encontrado todos los pares.')
      }
    } else {
      // Hide the cards after a short delay
      setTimeout(() => {
        firstCard.element.classList.remove('revealed')
        firstCard.element.classList.add('hidden')
        firstCard.element.textContent = ''

        secondCard.element.classList.remove('revealed')
        secondCard.element.classList.add('hidden')
        secondCard.element.textContent = ''

        revealedCards = []
      }, 1000)
    }
  }
}

function initGame() {
  matchedCards = 0
  revealedCards = []
  emojis = shuffleCards(generateEmojis())
  renderCards(emojis)
}

gameBoard.addEventListener('click', handleCardClick)

initGame()
