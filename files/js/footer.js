// code by qwkrtezzz (https://github.com/nubovik01)
// file created at 13 September 2024 21:02:55 PM (UTC+3)

document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector(".footer");
  footer.innerHTML = `
    <span class="line"></span>
    <p id="commit" translate="no"></p>
    <p id="debug" style="display: none;" translate="no">
      ———————————————————<br>
      📐 ${screen.width}x${screen.height} (${window.innerWidth}x${window.innerHeight})<br>
      💻 ${navigator.userAgent}<br>
      ———————————————————
    </p>
    <p class="copyrights" translate="no">
      Created by qwkrtezzz not w/ <3<br>
      © qwkrtezzz, <span class="year">2021</span><br>
    </p>
  `;

  document.getElementById("commit").onclick = () => {
    const debugElement = document.getElementById("debug");
    debugElement.style.display = debugElement.style.display === "none" ? "block" : "none";
  };

  document.querySelectorAll(".year").forEach(element => {
    const nowYear = new Date().getFullYear();
    if (element.textContent != nowYear) {
      element.innerText += `-${nowYear}`;
    }
  });
});