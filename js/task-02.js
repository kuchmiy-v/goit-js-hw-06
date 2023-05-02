const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];


const fragment = document.createDocumentFragment();
const ingredientsList = document.getElementById("ingredients");

const listContent = ingredients
  .map((ingredient) => {const listItem = document.createElement("li");
    listItem.textContent = ingredient;
    listItem.classList.add("item");
    fragment.appendChild(listItem);
    // ingredientsList.appendChild(listItem);
  })
  .join("");

  ingredientsList.appendChild(fragment);
  
// document.body.insertAdjacentHTML("beforeend", ingredientsList);


//=============================================================

// const listContent = ingredients
//   .map((ingredient) => `<li class="item">${ingredient}</li>`)
//   .join("");
// const list = `<ul>${listContent}</ul>`;

// document.body.insertAdjacentHTML("beforeend", list);

//=============

/* const listContent = ingredients.reduce((acc, ingredient) => acc + `<li>${ingredient}</li>`, "");
const list = `<ul>${listContent}</ul>`;
document.body.insertAdjacentHTML("beforeend", list); */