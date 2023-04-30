
const categoriesList = document.getElementById("categories");
const categoriesNum = categoriesList.children;
console.log(`Number of categories: ${categoriesNum.length}`);

const subCategories = categoriesList.querySelectorAll(".item");

subCategories.forEach( item =>
  {
      const elemName = item.firstElementChild.textContent;
      const elemQuantyti = item.lastElementChild.children.length;
      console.log(`Category: ${elemName}`);
      console.log(`Elements: ${elemQuantyti}`);
  });
