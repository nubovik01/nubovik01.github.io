// code by t.me/qwkrtezzz
// file created at 22 June 2023 01:23:13 AM (UTC+3)

const folderName='/files/js';
const listOfScripts=['console.js', 'differenceInTime.js', 'copyinbuffer.js', 'title.js', 'normalViewJson.js', 'screenresolution.js'];
var scriptsLoaded=0;

document.addEventListener('DOMContentLoaded', () => {
  const loader=document.querySelector('.js-loader');
  const content=document.querySelector('#content-of-page');
  loader.style.display='block';
  content.classList.add('hidded-content-of-page');
  var milliseconds=100;

  listOfScripts.forEach(script => {
    milliseconds+=27;
  
    setTimeout(()=>{
      const preloadElementScript=document.createElement('script');
      preloadElementScript.src=`${folderName}/${script}`;
      preloadElementScript.type='text/javascript';

      preloadElementScript.onload=()=>{
        if (++scriptsLoaded===listOfScripts.length) {
          loader.style.display='none';
          console.log("[*] Scripts has been loaded on client");
          content.classList.remove('hidded-content-of-page');
        }
      };
      
      document.head.appendChild(preloadElementScript);

      console.log(`%c[*] LOAD ${folderName}/${script}`, 'color: lightgreen;');
    }, milliseconds);
  });
});