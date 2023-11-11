// Code by qwkrtezzz (github.com/nubovik01) & RedGuy
// Created: 07/26/22 14:41

const jsDir = "/files/js";

new Loader([
  `${jsDir}/banners.js`, `${jsDir}/console.js`, `${jsDir}/copyinbuffer.js`,
  `${jsDir}/footer.js`, `${jsDir}/metrica.js`, `${jsDir}/normalViewJson.js`,
  `${jsDir}/screenresolution.js`, `${jsDir}/title.js`,
  `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css`
]);

function getAllLoadedScriptsOnThisPage() {
  document.write((((Array.from(document.getElementsByTagName("script"))).map(i => {return i.src}))).join("<br>"));
};