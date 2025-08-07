document.addEventListener("DOMContentLoaded", () => {
    const burgerBtn = document.querySelector(".header_top--container--interact--menu");
    const closeBtn = document.getElementById("closeMenuBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    burgerBtn?.addEventListener("click", () => {
        mobileMenu?.classList.add("open");
    });

    closeBtn?.addEventListener("click", () => {
        mobileMenu?.classList.remove("open");
    });
});