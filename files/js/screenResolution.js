// code by qwkrtezzz (github.com/nubovik01)
// file created at 09 May 2021 00:20:29 AM (UTC+3)

function getSize() {
  console.log(screen.height, screen.width);
};

function getScreenResolution(ms = 150) {
  console.log("Get screen resolution per %s ms.", ms);

  setInterval(() => getSize(), ms);
};