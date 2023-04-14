function loadHomePage() {
  const content = document.querySelector("#content");
  const mainText = document.createElement("h1");
  mainText.classList.add("home-header");
  mainText.textContent = "Solar Kitchen Bar";
  const text = document.createElement("h3");
  text.textContent = "Activated Vegan Food";
  text.classList.add("home-text");
  content.appendChild(mainText);
  content.appendChild(text);
}

export default loadHomePage;
