
function marquee(element) {
    let elementWidth = element.offsetWidth;
    let parentWidth = element.parentElement.offsetWidth;
    let flag = 0;
  
    setInterval(() => {
        element.style.marginLeft = --flag + "px";
  
        if (elementWidth == -flag) {
            flag = parentWidth;
        }
    }, 10);
}

const sliderPrevbtn = document.querySelector(".slider-prev");
const sliderNextbtn = document.querySelector(".slider-next");
const sliderViewContext = document.querySelector(".view-event-cards");
sliderNextbtn.addEventListener("click", () => {
    sliderViewContext.scrollLeft += 2000;
});
sliderPrevbtn.addEventListener("click", () => {
    sliderViewContext.scrollLeft -= 2000;
});