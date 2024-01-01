// code by qwkrtezzz (https://github.com/nubovik01)
// file created at 1 January 2024 06:20:09 PM (UTC+3)

function getCookie(name) {
  const value = "; " + document.cookie;
  const parts = value.split("; " + name + "=");
  if (parts.length === 2) return parts.pop().split(";").shift();
};

function closeCookieBlock() {
  document.getElementById("block-about-cookie").remove();

  document.cookie = "stopCookieAlert=true; max-age=31536000;";
};

function checkUserTheme() {
  return getCookie("theme");
};