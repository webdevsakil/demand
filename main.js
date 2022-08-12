document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menuBtn");
    const modalMenu = document.querySelector(".modal-menu");
    const closeMenu = document.querySelector(".closeMenu");
    menuBtn.addEventListener("click", function () {
        modalMenu.classList.remove("hide-menu");
        modalMenu.classList.add("show-menu");
    })
    closeMenu.addEventListener("click", function () {
        modalMenu.classList.add("hide-menu");
        modalMenu.classList.remove("show-menu");
    })
    // main menu
    const mainMenu = document.querySelector(".main-menu");
    const listItems = document.querySelectorAll(".main-menu ul li");
    mainMenu.addEventListener('click', function (e) {

        let length = listItems.length;
        for (let i = 0; i < length; i++) {
            if (listItems[i].classList.contains('active')) {
                listItems[i].classList.remove('active')
            }
        }
        let targetItem = e.target.parentNode;
        targetItem.classList.add('active');
    })
})