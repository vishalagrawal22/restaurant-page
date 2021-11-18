const chefIconUrl = require("./chef.png");
const data = require("./data.yaml");
import "./style.css";

function getDataSection(heading: string, value: string) {
  const dataSection = document.createElement("section");
  dataSection.classList.add("data-container");
  const dataHeading = document.createElement("section");
  dataHeading.classList.add("data-heading");
  dataHeading.innerText = heading;
  const dataValue = document.createElement("section");
  dataValue.classList.add("data-value");
  dataValue.innerText = value;
  dataSection.append(dataHeading, dataValue);
  return dataSection;
}

function getContactPage() {
  const centerFlexContainer = document.createElement("section");
  centerFlexContainer.id = "center-flex-container";
  const contactFlexContainer = document.createElement("section");
  contactFlexContainer.id = "contact-flex-container";

  const imageSection = document.createElement("section");
  imageSection.id = "chef-image-container";
  const imageTag = new Image();
  imageTag.id = "chef-image";
  imageTag.src = chefIconUrl;
  imageSection.appendChild(imageTag);

  const addressSection = getDataSection("Address: ", data["address"]);
  const contactNumberSection = getDataSection("Contact Number: ", data["contact-number"]);
  
  contactFlexContainer.append(
    imageSection,
    addressSection,
    contactNumberSection
  );
  centerFlexContainer.appendChild(contactFlexContainer);
  return centerFlexContainer;
}

export { getContactPage };
