let menuButton = document.querySelector('.menu-btn');
// console.log(menuButton);

let menuActive = document.querySelector('#menu-active');
console.log(menuActive);

menuButton.addEventListener('click', function () {
    menuActive.classList.toggle('menu-btn-active');
    menuActive.classList.toggle('menu');
})
