let burgerMenu = document.querySelector('.burger-menu');
console.log(burgerMenu)
// let menu = document.querySelector('.sub_menu_list1');
// console.log(menu);

if (burgerMenu) {
    let menu = document.querySelector('.sub_menu_list1');

    burgerMenu.addEventListener("click", function(x) {
        console.log(burgerMenu.classList.toggle("._active"));
        console.log(menu.classList.toggle("._active"));
    })
}

// burgerMenu.addEventListener('click', function() {
//     burgerMenu.classList.toggle('.burger-menu-active');
//     menu.classList.toggle('.sub_menu_list1.active');

// });
