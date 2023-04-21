const refs = {
    value: document.getElementById("value"),

    decremBtn: document.querySelector('[data-action="decrement"]'),
    incremBtn: document.querySelector('[data-action="increment"]'),
};

let counterValue = 0;
const increaseValue = (() => {
    counterValue += 1;
    value.textContent = counterValue;
});

const decreaseValue = (() => {
    counterValue -= 1;
    value.textContent = counterValue;
});

refs.decremBtn.addEventListener("click", decreaseValue);
refs.incremBtn.addEventListener("click", increaseValue);
