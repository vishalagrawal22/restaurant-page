var menu = require("./menu.yaml");

function createMenuPage() {
  const contentSection = document.querySelector("#content");
  const centerFlexContainer = document.createElement("section");
  centerFlexContainer.id = "center-flex-container";
  const menuFlexContainer = document.createElement("section");
  menuFlexContainer.id = "menu-flex-container";
  const menuHeader = document.createElement("section");
  menuHeader.id = "menu-header";
  const headline = document.createElement("section");
  headline.innerText = "Menu";
  menuHeader.appendChild(headline);
  menuFlexContainer.appendChild(menuHeader);
  const categoryListSection = document.createElement("section");
  categoryListSection.id = "category-list";

  for (const categoryObj of menu) {
    const categoryName = Object.keys(categoryObj)[0];

    const categorySection = document.createElement("section");
    categorySection.classList.add("category");
    const categoryHeading = document.createElement("section");
    categoryHeading.innerText = categoryName;
    categoryHeading.classList.add("category-heading");
    categorySection.appendChild(categoryHeading);

    const itemListSection = document.createElement("section");
    for (const itemObj of categoryObj[categoryName]) {
      const itemSection = document.createElement("section");
      const itemName = Object.keys(itemObj)[0];
      const itemPrice = itemObj[itemName]["price"];
      itemSection.innerText = `${itemName}: Rs. ${itemPrice}`;
      itemSection.classList.add("category-item");
      itemListSection.appendChild(itemSection);
    }

    categorySection.appendChild(itemListSection);
    categoryListSection.appendChild(categorySection);
  }

  menuFlexContainer.appendChild(categoryListSection);
  centerFlexContainer.appendChild(menuFlexContainer);
  contentSection.appendChild(centerFlexContainer);
}

export { createMenuPage };
