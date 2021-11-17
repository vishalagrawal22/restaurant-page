import "./styles/home.css";
const foodImageUrl = require("./images/food.jpg");

function createHome() {
  const contentSection = document.querySelector("#content");

  const restaurantCard = document.createElement("section");
  restaurantCard.id = "restaurant-card";

  const restaurantHeader = document.createElement("section");
  restaurantHeader.id = "restaurant-header";
  const headline = document.createElement("section");
  headline.innerText = "We specialize in serving delicious fast food";
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
  descriptionSection.innerText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget\
    magna blandit, semper lorem id, luctus elit. Suspendisse facilisis\
    placerat ante, nec pulvinar tellus maximus ut. Aliquam pharetra leo\
    at ultrices molestie. Donec vel ligula neque. Vestibulum tincidunt\
    ac metus quis sollicitudin. Etiam efficitur sed metus ac ornare.\
    Etiam pharetra malesuada sapien, sed tristique urna tempus vitae.\
    Duis ex risus, aliquet tempor tellus non, eleifend gravida est.\
    Fusce scelerisque, velit eget facilisis vehicula, velit dui laoreet\
    eros, in malesuada urna libero sit amet arcu. Nulla auctor egestas\
    facilisis. Pellentesque congue ligula sed consequat pellentesque.`;

  restaurantInfoSection.append(foodImageSection, descriptionSection);
  restaurantCard.append(restaurantHeader, restaurantInfoSection);
  contentSection.appendChild(restaurantCard);
}

export { createHome };
