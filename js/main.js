let menuButton = document.querySelector('.menu-btn');
console.log(menuButton);

let menuActive = document.querySelector('#menu-active');
console.log(menuActive);


menuButton.addEventListener('click', function () {
    menuActive.classList.toggle('active');
    menuActive.classList.toggle('menu-active');
})

//slider
let offset = 0; // left offset

let  swiperSlide = document.querySelector('.swiper-slide');
console.log(swiperSlide);

document.querySelector('.arrow').addEventListener('click', function() {
    offset = -offset + 232;
    if (offset > 928) {
        offset = 0;
    }
    swiperSlide.style.left = -offset + 'px';
})


