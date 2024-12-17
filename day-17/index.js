const form = document.getElementsByClassName('signup-form')[0]

form.addEventListener('submit', function (e) {
    e.preventDefault()
    document.getElementsByClassName('message')[0].style.visibility = 'visible'
    document.getElementsByClassName('message')[0].style.opacity = 1

    setTimeout(() => resetForm(), 3000)
})

function resetForm() {
    form.reset()
    document.getElementsByClassName('message')[0].style.visibility = 'hidden'
    document.getElementsByClassName('message')[0].style.opacity = 0
}