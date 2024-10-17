// code by qwkrtezzz (https://github.com/nubovik01)
// file created at 28 March 2024 10:33:59 PM (UTC+3)

const cardTemplate = (card) => `
  <div class="native" ${!card.translate ? `translate="no"` : ""}>
    ${card.link ? `<a href="${card.link}" target="_blank">` : ""}
      <div class="header">
        ${card.icon ? `<div><img alt="${card.title}" src="${card.icon}"></div>` : ""}
        ${card.title && card.icon ? `<div translate="no">${card.title}</div>` : ""}
        ${card.link ? `
          <div class="link">
            <span>${card.link.split('/')[2]}</span>
            ${card.link ? `<img id="blankImg" src="/files/images/newBlank.webp">` : ""}
          </div>` : ""}
      </div>
    ${card.link ? "</a>" : ""}
    ${card.description ? `<p>${card.description}</p>` : ""}
  </div>
`;

function listCards(cardsList, className = "cards") {
  const cards = document.getElementsByClassName(className)[0];
  if (cards.hasAttribute("hidden")) cards.toggleAttribute("hidden");

  cardsList.forEach(card => {
    const element = document.createElement("div");
    element.innerHTML = cardTemplate(card);
    cards.prepend(element);
  });
};