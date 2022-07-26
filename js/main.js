let menuButton = document.querySelector('.menu-btn');
console.log(menuButton);

let menuActive = document.querySelector('#menu-active');
console.log(menuActive);


menuButton.addEventListener('click', function () {
    menuActive.classList.toggle('active');
    menuActive.classList.toggle('menu-active');
})

