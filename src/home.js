function loadHomePage() {
  const content = document.querySelector("#content");
  const mainText = document.createElement("h1");
  mainText.textContent = "Solar Kitchen Bar";
  const text = document.createElement("h3");
  text.textContent = "The Restaurant is very good an the page is good as well.";
  content.appendChild(mainText);
  content.appendChild(text);
}

export default loadHomePage;
