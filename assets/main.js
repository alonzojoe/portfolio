
let menu = document.querySelector('#menu')
let navbar = document.querySelector('.navbar')
let header = document.querySelector('#header')
const sections = document.querySelectorAll('section');
const body = document.querySelector('body')


menu.onclick = () => {
    navbar.classList.toggle('active')
}

let changeTheme = document.querySelector('#theme')

changeTheme.onclick = () => {
    console.log(sections)
    header.classList.toggle('dark-mode')
    sections.forEach((s) => { s.classList.toggle('dark-mode') })
    changeTheme.classList.toggle('bxs-sun')
    body.classList.toggle('dark-mode')
}

