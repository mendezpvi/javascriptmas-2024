const stars = document.querySelectorAll('.stars li');
const hiddenRatingInput = document.getElementById('hidden-rating');
let currentRating = 0;

stars.forEach((star, index) => {
    // Handle click
    star.addEventListener('click', () => {
        setRating(index + 1);
    });

    // Handle keyboard navigation
    star.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            setRating(index + 1);
        } else if (e.key === 'ArrowRight') {
            const next = stars[index + 1];
            if (next) next.focus();
        } else if (e.key === 'ArrowLeft') {
            const prev = stars[index - 1];
            if (prev) prev.focus();
        }
    });
});

function setRating(rating) {
    currentRating = rating;

    // Update hidden input value
    hiddenRatingInput.value = rating;

    // Update star appearance
    stars.forEach((star, index) => {
        star.setAttribute('aria-checked', index < rating ? 'true' : 'false');
        star.tabIndex = index + 1 === rating ? 0 : -1;
    });

    console.log(`Rated ${rating} star(s)`);
}

document.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get the selected rating from the hidden input
    const ratingValue = hiddenRatingInput.value;
    let stars = [];
    if (ratingValue) {
        for (let i = 0; i < ratingValue; i++) {
            /* Task #4 */
            /* Replace the following line: */
            stars.push('<span class="review-star">★</span>');

            /* With: */
            // stars.push('★');
        }
    }

    const textArea = document.getElementById('text-area')
    const text = textArea.value;

    const textDisp = document.getElementById('text-output');

    /* Task #4 */
    /* Replace the following line: */
    textDisp.innerHTML += `<p>${stars.join(' ')} ${text}</p>`;

    /* With this block of code, which uses createElement to build the elements dynamically.
    This prevents code injection (XSS) by avoiding direct HTML string manipulation. */

    // const pTag = document.createElement('P')

    // if (stars.length > 0) {
    //     const spanTag = document.createElement('SPAN')
    //     spanTag.className = 'review-star'
    //     spanTag.textContent = stars.join('')
    //     pTag.appendChild(spanTag)
    // }

    // if (text) {
    //     const textNode = document.createTextNode(`${text}`)
    //     pTag.appendChild(textNode)
    // }

    // textDisp.append(pTag)

    // ********************

    textArea.value = ''
});


document.getElementById('prod-buy').addEventListener('click', function () {
    console.log('Product added to basket.')
})