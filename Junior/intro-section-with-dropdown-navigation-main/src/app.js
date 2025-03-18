const nav = document.querySelector(".responsive-menu");
const iconMenu = document.querySelector(".icon-menu");
const iconMenuClose = document.querySelector(".icon-close-menu");
const menuOptions = document.querySelectorAll(".menu-option"); 
const dropdownMenus = document.querySelectorAll(".dropdown-menu"); 

iconMenu.addEventListener("click", () => {
    nav.classList.add("visible");
});

iconMenuClose.addEventListener("click", () => {
    nav.classList.remove("visible");
});

menuOptions.forEach(function (menuOption, index) {
    menuOption.addEventListener("click", (event) => {
        event.preventDefault();
        const dropdownMenu = dropdownMenus[index]; 
        
        dropdownMenu.classList.toggle("visible");

        dropdownMenus.forEach(function (menu, i) {
            if (i !== index) {
                menu.classList.remove("visible");
            }
        });
    });
});