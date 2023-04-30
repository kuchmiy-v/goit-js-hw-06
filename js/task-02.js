const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

/* const listContent = ingredients.reduce((acc, ingredient) => acc + `<li>${ingredient}</li>`, "");
const list = `<ul>${listContent}</ul>`;
document.body.insertAdjacentHTML("beforeend", list); */

const listContent = ingredients
  .map((ingredient) => `<li class="item">${ingredient}</li>`)
  .join("");
const list = `<ul>${listContent}</ul>`;

document.body.insertAdjacentHTML("beforeend", list);
