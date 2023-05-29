const sliderPrevbtn = document.querySelector(".slider-prev i");
const sliderNextbtn = document.querySelector(".slider-next i");
const sliderViewContext = document.querySelector(".view-event-cards");
const navBarItems = document.querySelector(".nav-bar-items");
const navBarHam = document.querySelector(".nav-bar-hamburger i");

sliderNextbtn.addEventListener("click", () => {
    sliderViewContext.scrollLeft += 2000;
});
sliderPrevbtn.addEventListener("click", () => {
    sliderViewContext.scrollLeft -= 2000;
});

document.querySelector(".nav-bar-hamburger i").addEventListener("click", (e) => {
    navBarItems.classList.toggle("nav-bar-items-active");
    e.target.classList.toggle("nav-bar-hamburger-active");
});
document.querySelectorAll(".item-link a").forEach((item) => {
    item.addEventListener("click", () => {
        navBarItems.classList.toggle("nav-bar-items-active");
        navBarHam.classList.toggle("nav-bar-hamburger-active");
    })
});