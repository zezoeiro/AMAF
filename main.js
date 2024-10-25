var menuIcon = document.querySelector(".menu-icon");
var ul = document.querySelector(".ul");

menuIcon.addEventListener("click", () => {
    if (ul.classList.contains("ativo")) {
        ul.classList.remove("ativo");
        document.querySelector(".menu-icon img").src = "menu_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
    } else {
        ul.classList.add("ativo");
        document.querySelector(".menu-icon img").src = "close_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
    }
});
