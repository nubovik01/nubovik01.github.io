// code by qwkrtezzz (https://github.com/nubovik01)
// file created at 10 February 2025 06:14:31 PM (UTC+3)

window.addEventListener("DOMContentLoaded", () => {
  const preloader = document.createElement("div");
  preloader.id = "preloader";

  const spinner = document.createElement("div");
  spinner.className = "spinner";
  preloader.appendChild(spinner);

  document.body.insertBefore(preloader, document.body.firstChild);
});

window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  preloader.style.display = "none";

  const generalElement = document.getElementsByClassName("root")[0]
    || document.getElementsByClassName("container")[0];

  generalElement.style.display = "";
});