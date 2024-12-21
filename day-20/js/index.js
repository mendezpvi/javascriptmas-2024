import { elfFirstNames, elfLastNames } from "./data.js"

const formEl = document.getElementById('elf-name-form')
const elfNameDisplay = document.getElementById('elf-name-display')
const registeredElfNames = document.getElementById('registered-elf-names')

const initialValue = elfNameDisplay.textContent
const namesGenerated = []

formEl.addEventListener('submit', (e) => {
  e.preventDefault()
  const formData = new FormData(formEl)
  const firstNameInitial = formData.get("first-name").trim().charAt(0).toUpperCase()
  const lastNameInitial = formData.get("last-name").trim().charAt(0).toUpperCase()

  renderNamesGenerated(firstNameInitial, lastNameInitial)
  resetForm()
})

function findElfName(firstNameInitial, lastNameInitial) {
  const foundElfFirstName = elfFirstNames.find(name => name.charAt(0).toUpperCase() === firstNameInitial)
  const foundElfLastName = elfLastNames.find(name => name.charAt(0).toUpperCase() === lastNameInitial)

  namesGenerated.push(`${foundElfFirstName} ${foundElfLastName}`)
  console.log(namesGenerated)

  return { foundElfFirstName, foundElfLastName }
}


function renderNamesGenerated(firstNameInitial, lastNameInitial) {
  const { foundElfFirstName, foundElfLastName } = findElfName(firstNameInitial, lastNameInitial)

  elfNameDisplay.textContent = `${foundElfFirstName} ${foundElfLastName}`

  let itemsName = ''
  namesGenerated.forEach(name => {
    itemsName += `<li>${name}</li>`
  })

  registeredElfNames.innerHTML = itemsName
}


function resetForm() {
  formEl.reset()
  elfNameDisplay.textContent = initialValue
}

