// code by qwkrtezzz (https://github.com/nubovik01)
// file created at 19 April 2026 06:29:17 AM (UTC+3)

window.addEventListener("DOMContentLoaded", () => {
  let _timeout;

  function reset() {
    document.body.classList.remove("freeze-effect");
    clearTimeout(_timeout);

    _timeout = setTimeout(() => {
      document.body.classList.add("freeze-effect");
    }, 15000);
  };

  document.addEventListener("mousemove", reset);
  document.addEventListener("keydown", reset);
  reset();
});