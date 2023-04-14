function loadContactsPage() {
  const content = document.querySelector("#content");
  const header = document.createElement("h1");
  header.textContent = "CONTACTS";
  const address = document.createElement("h4");
  address.textContent = "Gr. Afxentiou 36 LARNACA, Larnaca, Cyprus, 6021";
  const openHours = document.createElement("p");
  openHours.textContent = "OPENING HOURS";
  content.appendChild(header);
  content.appendChild(address);
}

export default loadContactsPage;
