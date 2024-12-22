import { addresses } from './addresses.js'
import icons from "./icons.js"


function getRandomIndex(icons) {
  return Math.floor(Math.random() * icons.length)
}


function generateChristmasLabels(addresses) {

  return addresses.filter(address => address.isOnChristmasList)
    .map(address => {
      const { name, ["address line 1"]: addressLine, town, state, country } = address
      const iconIndex1 = getRandomIndex(icons)
      const iconIndex2 = getRandomIndex(icons)

      return `
      <section class="address">
        <div class="address-watermark">
          <img src="./assets/icons/${icons[iconIndex1]}" aria-hidden="true">
        </div>
        <img src="./assets/icons/${icons[iconIndex2]}" aria-hidden="true" class="address-icon">
        <h2 class="address-name">${name}</h2>
        <address class="address-details">
          <p class="address-line">${addressLine}</p>
          <p class="address-town">${town}</p>
          <p class="address-state">${state}</p>
          <p class="address-country">${country}</p>
        </address>
      </section>`
    }).join('')
}

document.addEventListener('DOMContentLoaded', () => {
  const addressLabels = document.getElementById('address-labels')
  addressLabels.innerHTML = generateChristmasLabels(addresses)
})
