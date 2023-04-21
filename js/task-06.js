const ref = {
    input: document.getElementById('validation-input'),
};

ref.input.addEventListener("blur", inputValidationCheck);

function inputValidationCheck(event) {
    const inputLength = event.target.value.trim().length;
    if (event.currentTarget.value.length === Number(ref.input.getAttribute('data-length'))) {
        ref.input.classList.add('valid');
        ref.input.classList.remove('invalid');
    } else {
        ref.input.classList.add('invalid');
        ref.input.classList.remove('valid');
    }
}