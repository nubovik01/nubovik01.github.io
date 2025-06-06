// code by qwkrtezzz (https://github.com/nubovik01)
// file created at 28 March 2024 10:33:59 PM (UTC+3)

// cursed code xD, welcome to the hell of programming!

const cardTemplate = (card) => `
  <div class="native" ${!card.translate ? `translate="no"` : ""}>
    ${card.link ? `<a href="${card.link}" target="_blank">` : ""}
      <div class="header" translate="no">
        ${card.icon ? `<div><img alt="${card.title} Icon" src="${card.icon}"></div>` : ""}
        ${card.title ? `<div>${card.title}</div>` : ""}
        ${card.link ? `
          <div class="link">
            <span>${card.link.split("/")[2]}</span>
            ${card.link ? `<img id="blank" src="/files/images/newBlank.webp">` : ""}
          </div>` : ""}
      </div>
    ${card.link ? "</a>" : ""}
    ${card.description ? `<p ${card.icon ? "" : `fix="true"`}>${card.description}</p>` : ""}
  </div>
`;

function listCards(cardsList, className = "cards") {
  const cards = document.getElementsByClassName(className)[0];

  cardsList.forEach(card => {
    const element = document.createElement("div");
    element.innerHTML = cardTemplate(card);
    cards.prepend(element);
  });
};