#HINTS

- You can think of each set of actions (revealing two cards) as a "turn" with one of two outcomes: the cards either match or don't match. Track the selected cards (can be in variables `firstCard` and `secondCard`) during each turn and write logic to handle both cases. After each turn, reset the selected cards to prepare for the next one.
- Use `setTimeout` to delay hiding unmatched cards.
- Use `data-*` attributes to store info about the cards (i.e. its emoji).


/**
 *🎄 Requirements:
 * - This is a classic "Find the Pair" game with a christmas theme.
 * - The player should be able to reveal cards by clicking on them.
 * - When the player reveals one card, it should stay revealed until a second card is revealed.
 * - When the player reveals two cards:
 *   - If they are the same, they should remain revealed for the rest of the game.
 *   - If they are different, they should be flipped back to hidden.
 * - The cards should be shuffled at the start of each game.
 */

/**
 * 🎅 Stretch Goals:
 * - Add a point system where points are awarded for each correctly revealed pair 
 *   and deducted for each incorrect pair (you decide the exact points for each action).
 * - Implement a high-score system using the browser's local storage.
 * - Add a "Restart Game" button that appears when the game ends so the user can start over.
 */
  

  // function shuffleArray(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const randomIndex = Math.floor(Math.random() * (i + 1));
//     [array[i], array[randomIndex]] = [array[randomIndex], array[i]]; // Intercambiar elementos
//   }
//   return array;
// }