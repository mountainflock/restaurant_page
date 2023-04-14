import loadHomePage from "./home.js";
import loadMenuPage from "./menu.js";
import loadContactsPage from "./contacts.js";

function createContents() {
  const content = document.querySelector("#content");
  const image = document.createElement("img");
  image.src = "../img.jpg";
  content.appendChild(image);
}
createContents();

const textDiv = document.createElement("div");
textDiv.classList.add("textDiv");
content.appendChild(textDiv);

const tabHome = document.createElement("button");
tabHome.textContent = "Home";
content.appendChild(tabHome);
tabHome.addEventListener("click", () => {
  textDiv.textContent = "";
  loadHomePage();
});

const tabMenu = document.createElement("button");
tabMenu.textContent = "Menu";
content.appendChild(tabMenu);
tabMenu.addEventListener("click", () => {
  textDiv.textContent = "";
  loadMenuPage();
});

const tabContacts = document.createElement("button");
tabContacts.textContent = "Contacts";
content.appendChild(tabContacts);
tabContacts.addEventListener("click", () => {
  textDiv.textContent = "";
  loadContactsPage();
});
