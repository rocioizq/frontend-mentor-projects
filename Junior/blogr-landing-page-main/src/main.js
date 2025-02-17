const nav = document.querySelector("nav");
const iconMenu = document.querySelector(".icon-menu");
const iconMenuClose = document.querySelector(".icon-menu-close");
const menuOptions = document.querySelectorAll(".menu-option");
const dropdownMenus = document.querySelectorAll(".dropdown-menu");

iconMenu.addEventListener("click", () => {
    nav.classList.add("visible");
    iconMenu.style.display = "none"; 
    iconMenuClose.style.display = "block";

    dropdownMenus.forEach(menu => {
        menu.classList.remove("active");
    });
});

iconMenuClose.addEventListener("click", () => {
    nav.classList.remove("visible");
    iconMenu.style.display = "block"; 
    iconMenuClose.style.display = "none";
});

menuOptions.forEach((option, index) => {
    option.addEventListener("click", () => {
        const dropdown = dropdownMenus[index];
        
        dropdownMenus.forEach((menu) => {
            menu.classList.remove("active");
        });

        dropdown.classList.toggle("active")
    });
});


