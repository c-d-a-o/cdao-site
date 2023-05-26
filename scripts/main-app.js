const sliderPrevbtn = document.querySelector(".slider-prev");
const sliderNextbtn = document.querySelector(".slider-next");
const sliderViewContext = document.querySelector(".view-event-cards");
sliderNextbtn.addEventListener("click", () => {
    sliderViewContext.scrollLeft += 2000;
});
sliderPrevbtn.addEventListener("click", () => {
    sliderViewContext.scrollLeft -= 2000;
});