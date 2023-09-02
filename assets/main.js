
let menu = document.querySelector('#menu')
let navbar = document.querySelector('.navbar')
let header = document.querySelector('#header')
let sections = document.querySelector('section')

menu.onclick = () => {
    navbar.classList.toggle('active')
}

let changeTheme = document.querySelector('#theme')

changeTheme.onclick = () => {
    header.classList.toggle('dark-mode')
    sections.classList.toggle('dark-mode')
    changeTheme.classList.toggle('bxs-sun')
}

