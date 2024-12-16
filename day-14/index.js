import { feedData } from "./data.js"

const feedAvatarsEl = document.querySelector('.feed-avatars')
const feedImagesEl = document.querySelector('.feed-images')

function renderAvatars() {
  // Generate the HTML for each avatar using the feedData array
  feedAvatarsEl.innerHTML = feedData.map(avatar => {
    return `<img src="./images/${avatar.avatarUrl}" alt="${avatar.handle} smiling at the camera." class="avatar">`
  }).join('')
}

function renderImage(images) {

  // Clear previous content
  feedImagesEl.innerHTML = ''
  feedImagesEl.innerHTML += `
    <figure>
      <img src="./images/${images.imageUrl}" alt="${images.alt}" class="feature-image">
      <p class="feature-text">${images.alt}</p>
    </figure>`
}

function renderHighlight(avatarIndex) {
  const avatars = [...document.getElementsByClassName('avatar')] /* Convert HTMLCollection to an array */

  avatars.forEach((avatar, index) => {
    if (avatarIndex === index) {
      avatar.classList.add('highlight')
      avatar.style.opacity = 1
    }
    else {
      avatar.classList.remove('highlight')
      avatar.style.opacity = .5
    }

  })
}

// Handle the timer to switch images and highlight avatars
function handleTimer() {
  let avatarIndex = 0 /* Index of the current avatar */
  let imgIndex = 0 /* Index of the current image */

  const interval = setInterval(() => {

    // Get the current avatar data
    const currentAvatar = feedData[avatarIndex] 

    // Get the current image of the avatar
    const currentImage = currentAvatar.features[imgIndex]

    // Render the featured image
    renderImage(currentImage)

    // Highlight the corresponding avatar
    renderHighlight(avatarIndex)

    // Move to the next image
    imgIndex++

    // If all images of the current avatar have been displayed
    if (imgIndex >= currentAvatar.features.length) {
      imgIndex = 0 /* Reset the image index */
      avatarIndex++ /* Move the next avatar */
    }

    // If all avatars have been displayed, stop the timer
    if (avatarIndex >= feedData.length) {
      clearInterval(interval)
      renderHighlight(-1) /* Remove avatar highlights */

      // Display a message to the user
      feedImagesEl.innerHTML = `<p class="ux-message">Refresh to load latest images</p>`
    }

  }, 1500) /* Change the image every 1.5s */
}

renderAvatars()
handleTimer()