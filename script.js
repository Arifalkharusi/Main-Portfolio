// selectors
const sliderShow = document.querySelectorAll(".slide-content");
const silderLeftBtn = document.querySelector(".slider-icon-left");
const silderRightBtn = document.querySelector(".slider-icon-right");
const preLoader = document.querySelector(".pre-loader");
const firstName = document.querySelector(".first-name");
const lastName = document.querySelector(".last-name");
const topScroll = document.querySelector(".scroll-top");
const contactSection = document.getElementById("contact-section");
const contactBtn = document.getElementById("contact-btn");

// var
let curSlide = 0;
let timy;

// func
const preLoaderFunc = () => {
  lastName.style.transform = "translateY(0)";
  firstName.style.transform = "translateX(0)";
  setTimeout(() => {
    preLoader.style.opacity = "0";
    setTimeout(() => {
      preLoader.style.display = "none";
    }, 1000);
  }, 2000);
};
// excecuted on load

// slider fuctions
const slideShow = function (slide) {
  sliderShow.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};

const moveSlide = () => {
  slideShow(curSlide);
  timer();
};

// slider timer fuction (every 7 sec, next slide)
const timer = function () {
  // clears timer on each itteration
  clearInterval(timy);
  timy = setInterval(function () {
    if (curSlide === sliderShow.length - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    slideShow(curSlide);
  }, 7000);
};

// events
topScroll.addEventListener("click", () => {
  scroll({ top: 0, behavior: "smooth" });
});

contactBtn.addEventListener("click", (e) => {
  e.preventDefault();
  contactSection.scrollIntoView({ behavior: "smooth" });
});

silderLeftBtn.addEventListener("click", () => {
  if (curSlide < 1) return;
  curSlide--;
  moveSlide();
});

silderRightBtn.addEventListener("click", () => {
  if (curSlide === sliderShow.length - 1) return;
  curSlide++;
  moveSlide();
});

preLoaderFunc();
timer();
slideShow(0);
