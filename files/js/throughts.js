// code by qwkrtezzz (https://github.com/nubovik01)
// file created at 19 April 2026 07:03:58 AM (UTC+3)

const throughts = [
  "you are here?",
  "why this exists?",
  "nothing to see here",
  "хуй соси",
  "я люблю тебя",
  "всё будет хорошо",
  "ты не один",
  "всё наладится",
  "не парься"
];

window.addEventListener("DOMContentLoaded", () => {
  const layer = document.createElement("div");
  layer.className = "throughts";
  document.body.appendChild(layer);

  function spawnGhost() {
    const text = document.createElement("span");
    text.textContent = throughts[Math.floor(Math.random() * throughts.length)];

    text.style.left = Math.random() * 100 + "vw";
    text.style.top = Math.random() * 100 + "vh";

    layer.appendChild(text);

    setTimeout(() => text.remove(), 6000);
  };

  setInterval(() => {
    if (Math.random() < 0.4) spawnGhost();
  }, 650);
});