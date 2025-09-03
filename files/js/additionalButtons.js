// code by qwkrtezzz (https://github.com/nubovik01)
// file created at 29 August 2025 01:16:36 AM (UTC+3)

document.addEventListener("DOMContentLoaded", () => {
  const toggleButtonsElement = document.getElementById("toggleAdditionalButtons");
  const moreButtonElement = document.getElementById("moreButtons");

  toggleButtonsElement.onclick = () => {
    const visible = moreButtonElement.style.display === "flex";
    moreButtonElement.style.display = visible ? "none" : "flex";
    toggleButtonsElement.textContent = visible ? "more..." : "...less";
  };
});