// code by qwkrtezzz (https://github.com/nubovik01)
// file created at 13 September 2024 21:02:55 PM (UTC+3)

document.addEventListener('DOMContentLoaded', () => {
  const footer = document.querySelector(".footer");

  const html = `
    <span class="line"></span>
    <!-- A.R.: /quotes.txt -->
    <p id="quote" onclick="changeQuote();" translate="no">
      ://: 02:11. RUN AWAY.
    </p>
    <p id="commit" translate="no"></p>
    <p class="copyrights" translate="no">
      Created by qwkrtezzz not w/ <3<br>
      © qwkrtezzz, <span class="year">2021</span>
    </p>
  `;

  footer.innerHTML = html;

  document.querySelectorAll(".year").forEach(element => {
    const nowYear = new Date().getFullYear();
    const copyrightYear = element.textContent;

    if (nowYear != copyrightYear) {
      element.innerText = copyrightYear + "-" + nowYear;
    };
  });
});
