import "./styles/style.css";
const foodImageUrl = require("./images/food.jpg");

const imageContainer = document.querySelector("#food-image-container");
const foodImage = new Image();
foodImage.src = foodImageUrl;
foodImage.id = "food-image";
imageContainer.appendChild(foodImage);