const ref = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};
ref.input.addEventListener("input", checkInputName);
function checkInputName(event) {
  const inputValue = event.target.value.trim();
  ref.output.textContent = inputValue ? inputValue : "Anonymous";
}
