import { codedMessage } from './codedMessage.js'


function decode(code) {
  const message = code.map(binary => {
    let ascii = parseInt(binary, 2)
    if (ascii < 37) ascii += 86
    else ascii -= 10
    return String.fromCharCode(ascii)
  }).join('')
  return message
}

document.addEventListener('DOMContentLoaded', () => {
  const h2 = document.querySelector('h2')

  h2.textContent = decode(codedMessage)
  console.log(decode(codedMessage))
})
