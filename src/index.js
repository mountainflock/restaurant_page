import "./style.css";
import loadHomePage from "./home.js";
import loadMenuPage from "./menu.js";
import loadContactsPage from "./contacts.js";

const content = document.querySelector("#content");

function updateContent() {
  content.textContent = "";
  content.appendChild(tabHome);
  content.appendChild(tabMenu);
  content.appendChild(tabContacts);
}

const tabHome = document.createElement("button");
tabHome.textContent = "Home";
content.appendChild(tabHome);

const tabMenu = document.createElement("button");
tabMenu.textContent = "Menu";
content.appendChild(tabMenu);

const tabContacts = document.createElement("button");
tabContacts.textContent = "Contacts";
content.appendChild(tabContacts);

loadHomePage();

const image = document.createElement("img");
image.src = "../img.jpg";
content.appendChild(image);

tabHome.addEventListener("click", () => {
  updateContent();
  loadHomePage();
  content.appendChild(image);
});

tabMenu.addEventListener("click", () => {
  updateContent();
  loadMenuPage();
});

tabContacts.addEventListener("click", () => {
  updateContent();
  loadContactsPage();
});
