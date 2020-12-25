import "./styles.scss";

const toggle = document.getElementsByClassName('header__nav__toggle')[0]
const links = document.getElementsByClassName('header__nav__links')[0]

toggle.addEventListener('click', () => {
    links.classList.toggle('active')
} )