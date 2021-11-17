const foodImageUrl = require("./food.jpg");
const data = require("./data.yaml");
import "./style.css";

function getHomePage() {
  const flexContainer = document.createElement("section");
  flexContainer.id = "center-flex-container";

  const restaurantCard = document.createElement("section");
  restaurantCard.id = "restaurant-card";

  const restaurantHeader = document.createElement("section");
  restaurantHeader.id = "restaurant-header";
  const headline = document.createElement("section");
  headline.innerText = data["short-description"];
  restaurantHeader.appendChild(headline);

  const restaurantInfoSection = document.createElement("section");
  restaurantInfoSection.id = "restaurant-info";
  const foodImageSection = document.createElement("section");
  foodImageSection.id = "food-image-container";
  const foodImage = new Image();
  foodImage.src = foodImageUrl;
  foodImage.id = "food-image";
  foodImageSection.appendChild(foodImage);

  const descriptionSection = document.createElement("section");
  descriptionSection.id = "description";
  descriptionSection.innerText = data["long-description"];

  restaurantInfoSection.append(foodImageSection, descriptionSection);
  restaurantCard.append(restaurantHeader, restaurantInfoSection);
  flexContainer.appendChild(restaurantCard);
  return flexContainer;
}

export { getHomePage };
