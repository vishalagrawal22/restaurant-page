import "./base.css";
const data = require("./base.yaml");
import { getHomePage } from "./home/home";
import { getMenuPage } from "./menu/menu";
import { getContactPage } from "./contact/contact";

(function () {
  interface page {
    [key: string]: Function;
  }
  const getMap: page = {
    home: getHomePage,
    menu: getMenuPage,
    contact: getContactPage,
  };
  const get = (pageName: string) => getMap[pageName]();

  const headerSection = document.createElement("header");
  const restaurantTitleSection = document.createElement("section");
  restaurantTitleSection.innerText = data["restaurant-name"];

  const navBar = document.createElement("nav");

  const homeSection = document.createElement("section");
  const homeSpan = document.createElement("span");
  homeSection.setAttribute("data-page", "home");
  homeSpan.innerText = "Home";
  homeSection.appendChild(homeSpan);

  const menuSection = document.createElement("section");
  const menuSpan = document.createElement("span");
  menuSection.setAttribute("data-page", "menu");
  menuSpan.innerText = "Menu";
  menuSection.appendChild(menuSpan);

  const contactSection = document.createElement("section");
  const contactSpan = document.createElement("span");
  contactSection.setAttribute("data-page", "contact");
  contactSpan.innerText = "Contact";
  contactSection.appendChild(contactSpan);

  navBar.append(homeSection, menuSection, contactSection);

  headerSection.append(restaurantTitleSection, navBar);

  const contentSection = document.createElement("main");
  contentSection.id = "content";

  document.body.append(headerSection, contentSection);

  const buttonList = document.querySelectorAll("nav section");

  function clearScreen() {
    contentSection.innerHTML = "";
  }

  function displayPage(page: string) {
    const content = get(page);
    contentSection.appendChild(content);
  }

  for (let buttonNo = 0; buttonNo < buttonList.length; buttonNo++) {
    const button = buttonList[buttonNo];
    button.addEventListener("click", () => {
      clearScreen();
      displayPage(button.getAttribute("data-page"));
    });
  }

  displayPage("home");
})();
