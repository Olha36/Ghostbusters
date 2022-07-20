let menuButton = document.querySelector('.menu-btn');

let menuActive = document.querySelector('#menu-active');
console.log(menuActive);

menuButton.addEventListener('click', function () {
    menuActive.classList.toggle('menu')
})