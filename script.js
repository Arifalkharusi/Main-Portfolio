// selectors

const preLoader = document.querySelector(".pre-loader");
const firstName = document.querySelector(".first-name");
const lastName = document.querySelector(".last-name");
const topScroll = document.querySelector(".scroll-top");
const contactSection = document.getElementById("contact-section");
const contactBtn = document.getElementById("contact-btn");

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

// events
topScroll.addEventListener("click", () => {
  scroll({ top: 0, behavior: "smooth" });
});

contactBtn.addEventListener("click", (e) => {
  e.preventDefault();
  contactSection.scrollIntoView({ behavior: "smooth" });
});

preLoaderFunc();
