// const ref = {
//     input: document.getElementById('font-size-control'),
//     input: document.getElementById('text'),
// };

// ref.input.addEventListener('input', textSize);

// function textSize(event) {
//     ref.displayText.style.fontSize = `${event.currentTarget.value}px`
// }

//=======================================================


const rangeInput = document.querySelector('#font-size-control');
const displayText = document.querySelector('#text');
rangeInput.addEventListener('input', textSize);
function textSize(event) {
  displayText.style.fontSize = `${event.currentTarget.value}px`
}