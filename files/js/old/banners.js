// code by t.me/qwkrtezzz
// file created at 07 Jule 2022 09:36:54 PM (UTC+3)

const listBann3rs = [
  's82n9j9mo0zm9jn3', 'h189j0mz12uhni1s'
];

const randBann3r = listBann3rs[Math.floor(Math.random() * listBann3rs.length)];
const bann3rDirect0ry = "/files/images/a1d/"+randBann3r+".png";
const idOfBann3rBl0ck = "a1d-img-bann3r";

if(!document.getElementById(idOfBann3rBl0ck)) {
  console.log("Я не смог найти блок для баннера! :(");
} else {
  setInterval(() => {
    try {
      document.getElementById(idOfBann3rBl0ck).innerHTML = `<a href="/bnrs/${randBann3r}"><img src="${bann3rDirect0ry}" class="a1d-img-bann3r-style-class"></a>`;
    } catch (bannersError) {
      console.log("%c"+bannersError,'font-size: 13px; background: #15151B; color: #8F8F94;');
    }
  }, 1000);
}