// code by t.me/qwkrtezzz
// file created at 17 February 2022 01:58:38 AM (UTC+3)

const pageTitle = document.title;
const siteDomain = ' - ' + window.location.hostname;

document.title = pageTitle + siteDomain;

console.log('A title of page has been changed');