function loadMenuPage() {
  const content = document.querySelector("#content");
  const menuItem = document.createElement("div");
  menuItem.textContent = "MENU ITEM";
  content.appendChild(menuItem);
}

export default loadMenuPage;
