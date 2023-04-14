function loadContactsPage() {
  const content = document.querySelector("#content");
  const contacts = document.createElement("div");
  contacts.classList.add("contacts");
  const header = document.createElement("h2");
  header.textContent = "Contacts";
  const address = document.createElement("h4");
  address.textContent = "Gr. Afxentiou 36 LARNACA, Larnaca, Cyprus, 6021";
  const tel = document.createElement("p");
  tel.textContent = "tel.: 24 04 06 44";
  contacts.appendChild(header);
  contacts.appendChild(address);
  contacts.appendChild(tel);
  content.appendChild(contacts);
}

export default loadContactsPage;
