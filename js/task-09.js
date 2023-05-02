function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeColor = document.querySelector(".change-color");
const spanTextColor = document.querySelector(".color");
const bgColor = document.querySelector("body");

btnChangeColor.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  spanTextColor.textContent = randomColor;
  bgColor.style.backgroundColor = randomColor;
});
