const burger = document.querySelector(".burger");
const dropDown = document.querySelector(".listMenu");

document.addEventListener("click", function (e) {
  if (
    e &&
    e.target.className !== "listMenu--item" &&
    e.target.className !== "item__link"
  ) {
    burger.classList.remove("showCross");
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

//  running numbers

let valueDisplays = document.querySelectorAll(".number__item");
let interval = 1000;

let shouldRunningNumbersStart = true;

function runningNumbers() {
  valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
      startValue += 1;
      valueDisplay.textContent = startValue;
      if (startValue == endValue) {
        clearInterval(counter);
      }
    }, duration);
  });
  shouldRunningNumbersStart = false;
}

function controllScroll() {
  document.addEventListener("scroll", () => {
    const heightScrollWindow = window.pageYOffset;
    const pages = document.querySelectorAll(".page");
    pages.forEach((item, index) => {
      let point = item.clientHeight * index;
      heightScrollWindow >= point
        ? item.classList.add("init")
        : item.classList.remove("init");
    });
    if (heightScrollWindow > 3204 && shouldRunningNumbersStart) {
      runningNumbers();
    }
  });
}

controllScroll();
