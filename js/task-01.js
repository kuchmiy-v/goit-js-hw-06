
const categoriesList = document.getElementById("categories");
const categoriesNum = categoriesList.children
console.log(`Number of categories: ${categoriesNum.length}`)

const subCategories = categoriesList.querySelectorAll(".item");

subCategories.forEach( item =>
  {
      const elemName = item.querySelector('h2').textContent;
      const elemQuantyti = item.querySelectorAll("li").length;
      console.log(`Category: ${elemName}`);
      console.log(`Elements: ${elemQuantyti}`);
  });
  