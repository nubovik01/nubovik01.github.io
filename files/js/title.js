// code by qwkrtezzz (https://github.com/nubovik01)
// file created at 4 February 2024 12:31:58 PM (UTC+3)

const documentTitle = document.title;
const siteDomain = window.location.hostname || "nubovik01.github.io";

document.title = documentTitle + " - " + siteDomain;

console.log("[*] A title of page has been changed.");