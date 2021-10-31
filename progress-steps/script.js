const circles = document.querySelectorAll(".circle");
const lines = document.querySelectorAll(".line");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let activeCircles = 0;
let activeLines = -1;
nextBtn.addEventListener("click", () => {
  if (activeCircles < 3) {
    activeCircles++;
    activeLines++;
    lines[activeLines].classList.add("active");
    circles[activeCircles].classList.add("active");

    prevBtn.classList.add("active");

    if (activeCircles === 3) {
      nextBtn.classList.remove("active");
    } else {
      nextBtn.classList.add("active");
    }
  }
});

prevBtn.addEventListener("click", () => {
  if (activeCircles > 0) {
    lines[activeLines].classList.remove("active");
    circles[activeCircles].classList.remove("active");
    activeCircles--;
    activeLines--;

    if (activeCircles === 0) {
      prevBtn.classList.remove("active");
    } else {
      nextBtn.classList.add("active");
    }
  }
});

console.log(circles, lines, nextBtn);
