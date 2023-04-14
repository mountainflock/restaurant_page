import loadHomePage from "./home.js";
import loadMenuPage from "./menu.js";
import loadContactsPage from "./contacts.js";

const content = document.querySelector("#content");
const image = document.createElement("img");
image.src = "../img.jpg";
content.appendChild(image);

function updateContent() {
  content.textContent = "";
  content.appendChild(image);
  content.appendChild(tabHome);
  content.appendChild(tabMenu);
  content.appendChild(tabContacts);
}

const tabHome = document.createElement("button");
tabHome.textContent = "Home";
content.appendChild(tabHome);

tabHome.addEventListener("click", () => {
  updateContent();
  loadHomePage();
});

const tabMenu = document.createElement("button");
tabMenu.textContent = "Menu";
content.appendChild(tabMenu);
tabMenu.addEventListener("click", () => {
  updateContent();
  loadMenuPage();
});

const tabContacts = document.createElement("button");
tabContacts.textContent = "Contacts";
content.appendChild(tabContacts);
tabContacts.addEventListener("click", () => {
  updateContent();
  loadContactsPage();
});
