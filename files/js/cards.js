// code by qwkrtezzz (https://github.com/nubovik01)
// file created at 28 March 2024 10:33:59 PM (UTC+3)

// cursed code xD, welcome to the hell of programming!

const cardTemplate = ({translate, link, icon, title, description, copyData}) => `
  <div class="native" ${!translate ? `translate="no"` : ""}>
    ${link || copyData ? `<a href="${link || "#copy"}" ${copyData ? "" : `target="_blank"`}>` : ""}
      <div class="header" translate="no">
        ${icon ? `<div><img alt="${title} Icon" src="${icon}"></div>` : ""}
        ${title ? `<span>${title}</span>` : ""}
        ${link || copyData ? `
          <div class="link">
            <span>${link?.split("/")[2] || ""}</span>
            ${link ? `<img id="symbol-icon" src="/files/images/newBlank.webp" alt="new">` : ""}
            ${copyData ? `<img id="symbol-icon" src="/files/images/copy.png" alt="copy">` : ""}
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

    const native = element.querySelector(".native");

    if (card.copyData) {
      native.addEventListener("click", () => {
        navigator.clipboard.writeText(card.copyData).then(() => {
          alert(`Successfully copied to clipboard! ${card.copyData}`);
        });
      });
    };

    cards.prepend(element);
  });
};