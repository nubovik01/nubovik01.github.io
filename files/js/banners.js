// Code by Nubovik
// Created: 07/07/2022 21:36

let listBann3rs = [
  's82n9j9mo0zm9jn3', 'h189j0mz12uhni1s'
];

let randBann3r = listBann3rs[Math.floor(Math.random() * listBann3rs.length)];
let bann3rDirect0ry = "/files/images/a1d/"+randBann3r+".png";
let idOfBann3rBl0ck = "a1d-img-bann3r";

if(!document.getElementById(idOfBann3rBl0ck)) {
  console.log("Я не смог найти блок для баннера! :(");
} else {
  setInterval(() => {
    try {
      document.getElementById(idOfBann3rBl0ck).innerHTML = `<a href="/bnrs/${randBann3r}"><img src="${bann3rDirect0ry}" class="a1d-img-bann3r-style-class"></a>`;
    } catch (bannersError) {
      console.log("%c"+bannersError,
        'font-size: 13px; background: #15151B; color: #8F8F94;'
      );
    }
  }, 1000);
}