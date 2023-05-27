const sliderPrevbtn = document.querySelector(".slider-prev");
const sliderNextbtn = document.querySelector(".slider-next");
const sliderViewContext = document.querySelector(".view-event-cards");
const navBarItems = document.querySelector(".nav-bar-items");

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
    })
});