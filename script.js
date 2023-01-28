const sliderShow = document.querySelectorAll(".slide-show");
const silderLeftBtn = document.querySelector(".slider-icon-left");
const silderRightBtn = document.querySelector(".slider-icon-right");
const preLoader = document.querySelector(".pre-loader");
const firstName = document.querySelector(".first-name");
const lastName = document.querySelector(".last-name");

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

preLoaderFunc();

let curSlide = 0;
let timy;
// slider fuctions
const slidy = function (slide) {
  sliderShow.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};
// set silder at postion 0 on load
slidy(0);

const moveSlide = () => {
  slidy(curSlide);
  timer();
};

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
    slidy(curSlide);
  }, 7000);
};
// sets timer on load
timer();
