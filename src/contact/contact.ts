const chefIconUrl = require("./chef.png");
const data = require("./data.yaml");
import "./style.css";

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

  const addressSection = document.createElement("section");
  addressSection.classList.add("data-container");
  const addressHeading = document.createElement("section");
  addressHeading.classList.add("data-heading");
  addressHeading.innerText = "Address: ";
  const addressValue = document.createElement("section");
  addressValue.classList.add("data-value");
  addressValue.innerText = data["address"];
  addressSection.append(addressHeading, addressValue);

  const contactNumberSection = document.createElement("section");
  contactNumberSection.classList.add("data-container");
  const contactNumberHeading = document.createElement("section");
  contactNumberHeading.classList.add("data-heading");
  contactNumberHeading.innerText = "Contact Number: ";
  const contactNumberValue = document.createElement("section");
  contactNumberValue.classList.add("data-value");
  contactNumberValue.innerText = data["contact-number"];
  contactNumberSection.append(contactNumberHeading, contactNumberValue);

  contactFlexContainer.append(
    imageSection,
    addressSection,
    contactNumberSection
  );
  centerFlexContainer.appendChild(contactFlexContainer);
  return centerFlexContainer;
}

export { getContactPage };
