function loadMenuPage() {
  const content = document.querySelector("#content");
  const menu = document.createElement("div");
  menu.classList.add("menu");
  menu.appendChild(createMenuItem());
  content.appendChild(menu);
  menu.appendChild(
    createMenuItem(
      "Vegetable burger",
      "Organic potato and seasonal vegetables) with our almond-mayo sauce"
    )
  );
  menu.appendChild(createMenuItem("Falafel burger", "With our tahini sauce."));
  menu.appendChild(
    createMenuItem(
      "Solar bowl Salad",
      "Green leaf salad with fruit and nuts in a sweet dressing"
    )
  );
  menu.appendChild(
    createMenuItem("Solar Fruit Salad", "Seasonal fruits, sprouts, nuts")
  );
  menu.appendChild(
    createMenuItem("Solar Oat cookie", "(sweetened with fruit)")
  );
  menu.appendChild(
    createMenuItem("Smoothie of the day", "(with seasonal fruits)")
  );
}

function createMenuItem(name, description) {
  const item = document.createElement("div");
  const header = document.createElement("h3");
  const text = document.createElement("p");
  text.classList.add("menu-item");
  header.textContent = name;
  text.textContent = description;
  item.appendChild(header);
  item.appendChild(text);
  return item;
}

export default loadMenuPage;
