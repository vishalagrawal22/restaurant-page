import "./styles/base.css";
import { createHome } from "./home";

const headerSection = document.createElement("header");

const restaurantTitleSection = document.createElement("section");
restaurantTitleSection.innerText = "Hunger Junction";

const navBar = document.createElement("nav");

const homeSection = document.createElement("section");
homeSection.innerText = "Home";

const menuSection = document.createElement("section");
menuSection.innerText = "Menu";

const contactSection = document.createElement("section");
contactSection.innerText = "Contact";


navBar.append(homeSection, menuSection, contactSection);

headerSection.append(restaurantTitleSection, navBar);

const contentSection = document.createElement("main");
contentSection.id = "content";

document.body.append(headerSection, contentSection);

createHome();