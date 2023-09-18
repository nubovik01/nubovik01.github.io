// code by t.me/qwkrtezzz
// file created at 09 May 2021 00:20:29 AM (UTC+3)

function getSize() {
  console.log(screen.height, screen.width);
};

function getScreenResolution() {
  console.log("Get screen resolution per 150 ms.");

  setInterval(() => {
    getSize();
  }, 150);
};