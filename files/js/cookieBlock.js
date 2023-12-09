// code by qwkrtezzz (github.com/nubovik01)
// file created at 9 December 2023 22:19:49 PM (UTC+3)

function closeCookieBlock() {
  document.getElementById("block-about-cookie").remove();

  document.cookie = "stopCookieAlert=true; max-age=31536000;";
};