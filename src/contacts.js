function loadContactsPage() {
  const content = document.querySelector("#content");
  const contacts = document.createElement("div");
  const header = document.createElement("h2");
  const tel = document.createElement("p");
  const address = document.createElement("h4");
  const mapImg = document.createElement("img");
  mapImg.classList.add("map");
  mapImg.src = "../mapImg.png";
  contacts.classList.add("contacts");
  header.textContent = "Contacts";
  address.textContent = "Gr. Afxentiou 36 LARNACA, Larnaca, Cyprus, 6021";
  tel.textContent = "tel.: 24 04 06 44";
  contacts.appendChild(header);
  contacts.appendChild(address);
  contacts.appendChild(tel);
  contacts.appendChild(mapImg);
  content.appendChild(contacts);
}

export default loadContactsPage;
