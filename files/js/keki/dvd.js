// code by t.me/rldv1 (rldv1.live), deobfuscated by t.me/kitenokgene (kshk.floyzi.ru)
// original: 3.65.75.53, deobfuscated original: kshk.floyzi.ru/dvd (wheelchair🐳)
// some keked changes by qwkrtezzz (github.com/nubovik01)
// this file created at 1 August 2023 02:05:27 AM (UTC+3)

function pickColor() {
  logoColor = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
};

let speed = 20,
  scale = 0.17,
  canvas, ctx, logoColor,
  dvd = {
    x: 200,
    y: 300,
    xspeed: 10,
    yspeed: 10,
    img: new Image()
  };

(function main() {
  canvas = document.getElementById('tv-screen');
  ctx = canvas.getContext('2d');
  dvd.img.src = '/files/images/icons/JavaScript.png';
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  pickColor();
  update();
}());

function update() {
  setTimeout(() => {
    ctx.fillStyle = '#111111';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = logoColor;
    ctx.fillRect(dvd.x, dvd.y, dvd.img.width * scale, dvd.img.height * scale);
    ctx.drawImage(dvd.img, dvd.x, dvd.y, dvd.img.width * scale, dvd.img.height * scale);
    dvd.x += dvd.xspeed;
    dvd.y += dvd.yspeed;
    checkHitBox();
    update();
  }, speed);
};

function checkHitBox() {
  if (dvd.x + dvd.img.width * scale >= canvas.width || dvd.x <= 0) {
    dvd.xspeed = -dvd.xspeed;
    pickColor();
  };
  if (dvd.y + dvd.img.height * scale >= canvas.height || dvd.y <= 0) {
    dvd.yspeed = -dvd.yspeed;
    pickColor();
  };

  // check if image hits a corner
  if ((dvd.x <= 0 && dvd.y <= 0) || 
    (dvd.x + dvd.img.width * scale >= canvas.width && dvd.y <= 0) ||
    (dvd.x <= 0 && dvd.y + dvd.img.height * scale >= canvas.height) || 
    (dvd.x + dvd.img.width * scale >= canvas.width && dvd.y + dvd.img.height * scale >= canvas.height)) {
    alert("bonus");
  };
};