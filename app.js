const menu = document.querySelector('#mobile-menu')
const menuLink = documen.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLink.classList.toggle('active');
});