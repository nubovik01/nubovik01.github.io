// code by qwkrtezzz (https://github.com/nubovik01)
// file created at 13 September 2024 21:02:55 PM (UTC+3)

document.addEventListener('DOMContentLoaded', () => {
  const footer = document.querySelector(".footer");

  const html = `
    <span class="line"></span>
    <!-- A.R.: ./quotes.txt -->
    <p id="quote" onclick="changeQuote();"></p>
    <p id="commit" translate="no"></p>
    <p class="copyrights" translate="no">
      Created by qwkrtezzz not w&sol; &lt;3<br>
      &COPY; qwkrtezzz&comma; <span class="year">2021</span><br>
      &COPY; dreamworld&comma; <span class="year">2024</span>
    </p>
    <a href="https://notbyai.fyi">
      <img class="notbyai" alt="site created by human, not by AI"
        src="./files/images/not-by-ai/en-created.svg">
    </a>
  `;
  // todo: сделать чтобы цвет notbyai зависел от темы юзера 

  footer.innerHTML = html;

  document.querySelectorAll(".year").forEach(element => {
    const nowYear = new Date().getFullYear();
    const copyrightYear = element.textContent;

    if (nowYear != copyrightYear) {
      element.innerText = copyrightYear + "-" + nowYear;
    };
  });
});