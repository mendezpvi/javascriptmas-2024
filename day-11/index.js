const gameBoard = document.getElementById('game-board');

// Genera el array duplicado de emojis
function generateEmojis() {
  const emojis = ['🎄', '🎁', '🎅', '☃️'];
  return [...emojis, ...emojis]
}

// Mezcla las cartas de forma aleatoria
function shuffleCards(arr) {
  return arr.sort(() => Math.random() - 0.5)
}

// Renderiza las cartas en el tablero
function renderCards(emojis) {
  gameBoard.innerHTML = emojis
    .map(() => `<div class="card hidden"></div>`) // Las cartas inician ocultas
    .join('')
}

// Variables para manejar el juego
let revealedCards = []
let matchedCards = 0
let emojis = []

// Maneja la lógica de revelación y comparación de cartas
function handleCardClick(e) {
  const clickedCard = e.target
  const cardIndex = Array.from(gameBoard.children).indexOf(clickedCard)

  // Evita seleccionar la misma carta dos veces o interactuar con cartas ya reveladas
  if (
    clickedCard.classList.contains('revealed') ||
    revealedCards.length === 2 ||
    matchedCards === emojis.length
  ) {
    return
  }

  // Revela la carta
  clickedCard.classList.remove('hidden')
  clickedCard.classList.add('revealed')
  clickedCard.textContent = emojis[cardIndex]

  revealedCards.push({ element: clickedCard, value: emojis[cardIndex] })

  // Si se revelaron dos cartas, compara
  if (revealedCards.length === 2) {
    const [firstCard, secondCard] = revealedCards
    if (firstCard.value === secondCard.value) {
      // Mantener las cartas reveladas
      revealedCards = []
      matchedCards += 2
      if (matchedCards === emojis.length) {
        alert('¡Felicidades! Has encontrado todos los pares.')
      }
    } else {
      // Ocultar las cartas después de un breve retraso
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

// Inicializa el juego
function initGame() {
  matchedCards = 0
  revealedCards = []
  emojis = shuffleCards(generateEmojis())
  renderCards(emojis)
}

gameBoard.addEventListener('click', handleCardClick)

initGame()
