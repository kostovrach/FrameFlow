document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".header__burger");
    const menu = document.querySelector(".header__burger-wrapper");
    const iconWrapper = document.querySelector(".header__burger-icon-wrapper");
    const icon = document.querySelector(".header__burger-icon");

    burger.addEventListener("click", function(e) {
        burger.classList.toggle('_active');
        menu.classList.toggle('_active');
        iconWrapper.classList.toggle('_active');
        icon.classList.toggle('_active');
    });
});