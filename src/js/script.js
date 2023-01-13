const burger = document.querySelector(".burger");
const dropDown = document.querySelector(".listMenu");

document.addEventListener("click", function (e) {
  if (
    e &&
    e.target.className !== "listMenu--item" &&
    e.target.className !== "item__link"
  ) {
    burger.classList.remove("showCross");

    // dropDown.style.cssText = `@media (min-width: 993px) {
    //     display: none;}`;
    dropDown.classList.remove("showMenu");
  }
});

burger.addEventListener("click", function (e) {
  burger.classList.toggle("showCross");

  if (burger.classList.contains("showCross")) {
    dropDown.classList.toggle("showMenu");
  } else {
    dropDown.classList.toggle("showMenu");
  }
  e.stopPropagation();
});

// add Escape

document.addEventListener("keydown", function (el) {
  if (el.key == "Escape") {
    dropDown.classList.toggle("showMenu");
    burger.classList.remove("showCross");
  }
});

//  fixed menu on scroll desctop

// function controlScroll() {
//   document.addEventListener("scroll", () => {
//     let heightScrollWindow = window.pageYOffset;
//     let page = document.querySelector(".menu__container");
//     if (heightScrollWindow >= 40) {
//       page.classList.add("scrollpage");
//     }
//     console.log("heightWindow", heightScrollWindow);
//   });
// }

// controlScroll();
