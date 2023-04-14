function loadContactsPage() {
  const content = document.querySelector("#content");
  const mainText = document.createElement("h1");
  mainText.textContent = "CONTACTS";
  const text = document.createElement("h4");
  text.textContent = "USA, Chicago, Lenin Str., 1";
  content.appendChild(mainText);
  content.appendChild(text);
}

export default loadContactsPage;
