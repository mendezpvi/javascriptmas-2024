const santasArr = ['James', 'Yi', 'Grinch', 'Fatima', 'Tariq', 'Grinch', 'Clare', 'Grinch']

const missingNamesArr = ['Florinda', 'Jose', 'Gibbs']

const ulEl = document.querySelector('ul')
const buttonEl = document.querySelector('button')

let isHackedList = true


function renderList(list) {
  let itemHTML = ''
  list.forEach(name => {
    if (name === 'Grinch') {
      itemHTML += `<li style="color: #97BE5A; text-decoration: underline wavy; text-underline-offset: 3px">${name}</li>`
    } else {
      itemHTML += `<li>${name}</li>`
    }
  });
  ulEl.innerHTML = itemHTML
}

function correctHackedList(hackedList) {
  const correctList = [...hackedList]
  let missingNamesIndex = 0

  for (let i = 0; i < correctList.length; i++) {
    if (correctList[i] === 'Grinch') {
      correctList[i] = missingNamesArr[missingNamesIndex]
      missingNamesIndex++
    }
  }
  return correctList
}

function toggleList() {
  if (isHackedList) {
    renderList(correctHackedList(santasArr))
    buttonEl.textContent = `Show Hacked List`
  } else {
    renderList(santasArr)
    buttonEl.textContent = `Show Correct List`
  }

  isHackedList = !isHackedList
}


document.addEventListener('DOMContentLoaded', () => {
  renderList(santasArr)
})
buttonEl.addEventListener('click', toggleList)

