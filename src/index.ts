import "./style.css";
import { createHomePage } from "./home";
import { createMenuPage } from "./menu";
import { createContactPage } from "./contact";

(function () {
  interface page {
    [key: string]: Function;
  }
  const createMap: page = {
    home: createHomePage,
    menu: createMenuPage,
    contact: createContactPage,
  };
  const create = (pageName: string) => createMap[pageName]();

  const headerSection = document.createElement("header");
  const restaurantTitleSection = document.createElement("section");
  restaurantTitleSection.innerText = "Hunger Junction";

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

  for (let buttonNo = 0; buttonNo < buttonList.length; buttonNo++) {
    const button = buttonList[buttonNo];
    button.addEventListener("click", () => {
      clearScreen();
      create(button.getAttribute("data-page"));
    });
  }

  create("home");
})();
