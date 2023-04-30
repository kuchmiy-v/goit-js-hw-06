const rangeInput = document.querySelector('#font-size-control');
const displayText = document.querySelector('#text');

displayText.style.fontSize = rangeInput.value + 'px';
rangeInput.addEventListener('input', textSize);

function textSize(event) {
  displayText.style.fontSize = `${event.currentTarget.value}px`
}

//=======================================================

// const refs = {
//   input: document.getElementById("font-size-control"),
//   span: document.getElementById('text')
// };

// refs.span.style.fontSize = refs.input.value + 'px';

// refs.input.addEventListener('input', (event) => {
//   const fontSize = event.currentTarget.value;
//   refs.span.style.fontSize = `${fontSize}px`;
// })

// console.log(refs);