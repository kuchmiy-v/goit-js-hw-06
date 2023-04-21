const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

/* const listContent = ingredients.reduce((acc, ingredient) => acc + `<li>${ingredient}</li>`, "");
const list = `<ul>${listContent}</ul>`;
document.body.insertAdjacentHTML("afterbegin", list); */

const ulEl = document.createElement("ul");

for (const ingredient of ingredients) {
  const liEl = document.createElement("li");
  liEl.textContent = ingredient;
  liEl.classList.add("item");
  ulEl.appendChild(liEl);
}

document.body.prepend(ulEl);