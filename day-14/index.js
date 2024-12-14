import { feedData } from "./data.js"

const feedAvatarsEl = document.querySelector('.feed-avatars')
const feedImagesEl = document.querySelector('.feed-images')

function renderAvatars() {
  feedAvatarsEl.innerHTML = feedData.map(avatar => {
    return `<img src="./images/${avatar.avatarUrl}" alt="${avatar.handle} smiling at the camera." class="avatar">`
  }).join('')
}

function renderImage(images) {
  feedImagesEl.innerHTML = ''
  console.log(images)
  feedImagesEl.innerHTML += `
    <figure>
      <img src="./images/${images.imageUrl}" alt="${images.alt}" class="feature-image">
      <p class="feature-text">${images.alt}</p>
    </figure>`
}

function renderHighlight(avatarIndex) {
  const avatars = [...document.getElementsByClassName('avatar')]

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

function handleTimer() {
  let avatarIndex = 0
  let imgIndex = 0

  const interval = setInterval(() => {

    const currentAvatar = feedData[avatarIndex]
    const currentImage = currentAvatar.features[imgIndex]

    renderImage(currentImage)
    renderHighlight(avatarIndex)

    imgIndex++

    if (imgIndex >= currentAvatar.features.length) {
      imgIndex = 0
      avatarIndex++
    }

    if (avatarIndex >= feedData.length) {
      clearInterval(interval)
      renderHighlight(-1)

      feedImagesEl.innerHTML = `<p class="ux-message">Refresh to load latest images</p>`
    }

  }, 1500)
}

renderAvatars()
handleTimer()