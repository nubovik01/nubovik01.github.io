// code by qwkrtezzz (https://github.com/nubovik01)
// file created at 13 September 2024 21:02:55 PM (UTC+3)

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("footer").forEach(footer => {
    footer.innerHTML = `
      <span class="line"></span>
      <p class="commit" translate="no"></p>
      <p class="debug" style="display: none;" translate="no">
        ———————————————————<br>
        You found an easter egg!<br>
        📐 ${screen.width}x${screen.height} (${window.innerWidth}x${window.innerHeight})<br>
        💻 ${navigator.userAgent}<br>
        ———————————————————
      </p>
      <p class="copyrights" translate="no">
        Created by qwkrtezzz not w/ <3<br>
        hyperbola[at]kittyy[dot]ru<br>
        © qwkrtezzz, <span class="year">2021</span><br>
      </p>
    `;

    footer.querySelector(".line").onclick = () => {
      const debugElement = footer.querySelector(".debug");
      debugElement.style.display = debugElement.style.display === "none" ? "block" : "none";
    };

    footer.querySelectorAll(".year").forEach(element => {
      const nowYear = new Date().getFullYear();

      if (element.textContent != nowYear) {
        element.innerText += `-${nowYear}`;
      };
    });
  });
});