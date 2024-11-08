// code by qwkrtezzz (https://github.com/nubovik01)
// file created at 8 November 2024 02:28:37 PM (UTC+3)

const Notifications = function () {
  const notify = document.getElementsByClassName("notify")[0];

  this.showNotify = function (_text) {
    notify.style.display = "block";
    notify.textContent = _text;

    console.log("[*] The notification was shown to the user.");

    setTimeout(() => {
      notify.style.display = "none";
    }, 5000);
  };
};