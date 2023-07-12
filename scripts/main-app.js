window.onscroll = () => {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop >= 50  || document.documentElement.scrollTop > 50) {
    document.querySelector(".nav-bar-blinds").classList.add("nav-bar-blinds-on");
  } else {
    document.querySelector(".nav-bar-blinds").classList.remove("nav-bar-blinds-on");
  }
}

const sliderPrevbtn = document.querySelector(".slider-prev i");
const sliderNextbtn = document.querySelector(".slider-next i");
const sliderViewContext = document.querySelector(".view-event-cards");
const navBarItems = document.querySelector(".nav-bar-items");
const navBarHam = document.querySelector(".nav-bar-hamburger i");

sliderNextbtn.addEventListener("click", () => {
    sliderViewContext.scrollLeft += 1000;
});
sliderPrevbtn.addEventListener("click", () => {
    sliderViewContext.scrollLeft -= 1000;
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

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  
const photos = document.getElementsByClassName("photo");

for (let i = photos.length - 1; i >= 0; i--) {
    const relZInd = i + 100;
    photos[i].style.zIndex = relZInd;

    const rotation = getRandomArbitrary(6, -6);
    const xMargin = getRandomArbitrary(45, -45);
    const yMargin = getRandomArbitrary(45, -45);
    photos[i].style.webkitTransform = 'rotate(' + rotation + 'deg) translateY(' + yMargin + 'px) translateX(' + xMargin + 'px)';
    photos[i].style.MozTransform = 'rotate(' + rotation + 'deg)';
    photos[i].style.msTransform = 'rotate(' + rotation + 'deg)';
    photos[i].style.transform = 'rotate(' + rotation + 'deg)';
}
  
let count = photos.length - 1;

function photoClickHandler() {
    let topElement = photos[count];
    let currentIndex = parseInt(getComputedStyle(topElement).zIndex);
    let newIndex = currentIndex - photos.length;
    topElement.style.zIndex = newIndex;
    count--;

    if (count === -1) {
        count = photos.length - 1;
    }
}
  
  const photoElements = document.getElementsByClassName("photo");
  for (let i = 0; i < photoElements.length; i++) {
    photoElements[i].addEventListener('click', photoClickHandler);
  }
  
function scrollToView(view){
  let element = document.getElementById(view);
  let headerOffset = 90;
  if (window.matchMedia("(max-width: 768px)").matches) {
    headerOffset = 70;
  }
  let elementPosition = element.getBoundingClientRect().top;
  let offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
  });
}