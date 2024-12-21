import { toysRequested } from './data.js'

const toyCountList = document.getElementById('toy-count-list')
const mostPopularToyEl = document.getElementById('most-popular-toy')

function findMostPopularToy(toysRequested) {
  const toyCounts = {}

  toysRequested.forEach(location => {
    location.toys.forEach(toy => {
      const [name, amount] = Object.entries(toy)[0]

      toyCounts[name] = (toyCounts[name] || 0) + amount
    })
  })

  let mostPopularToy = ''
  let maxRequests = 0

  for (const [toy, count] of Object.entries(toyCounts)) {
    const LI = document.createElement('LI')
    const SPAN = document.createElement('SPAN')
    LI.textContent = `${toy}:`
    SPAN.textContent = `${count}`
    LI.appendChild(SPAN)
    toyCountList.appendChild(LI)

    if (count > maxRequests) {
      mostPopularToy = toy
      maxRequests = count
    }
  }

  mostPopularToyEl.innerHTML = `The most popular toy is <span class="accent">${mostPopularToy}</span> with <span class="accent">${maxRequests}</span> requests.`

  return `The most popular toy is ${mostPopularToy} with ${maxRequests} requests.`
}

console.log(findMostPopularToy(toysRequested))
