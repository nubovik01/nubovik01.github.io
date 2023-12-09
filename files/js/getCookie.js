// code by qwkrtezzz (github.com/nubovik01)
// file created at 9 December 2023 21:41:55 PM (UTC+3)

function getCookie(name) {
  return document.cookie.split("; ").find((row) => row.startsWith(`${name}=`))?.split("=")[1];
};