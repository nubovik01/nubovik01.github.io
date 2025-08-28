// code by qwkrtezzz (https://github.com/nubovik01)
// file created at 28 March 2024 10:33:59 PM (UTC+3)

// cursed code xD, welcome to the hell of programming!

const cardTemplate = ({translate, link, icon, title, description}) => `
  <div class="native" ${!translate ? `translate="no"` : ""}>
    ${link ? `<a href="${link}" target="_blank">` : ""}
      <div class="header" translate="no">
        ${icon ? `<div><img alt="${title} Icon" src="${icon}"></div>` : ""}
        ${title ? `<span>${title}</span>` : ""}
        ${link ? `
          <div class="link">
            <span>${link.split("/")[2]}</span>
            <img id="blank" src="/files/images/newBlank.webp">
          </div>
        ` : ""}
      </div>
    ${link ? "</a>" : ""}
    ${description ? `<p ${icon ? "" : `fix="true"`}>${description}</p>` : ""}
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