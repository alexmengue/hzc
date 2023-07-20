const menu = document.querySelector('.side-menu');
const menuBtn = document.querySelector('.header__menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('side-menu__active');
})