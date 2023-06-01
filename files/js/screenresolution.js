// Code by Nubovik
// Created: 09/05/21 0:20

function getSize() {
  console.log(screen.height, screen.width);
};

function getScreenResolution() {
  console.log("Get screen resolution per 150 ms.");

  setInterval(() => {
    getSize();
  }, 150);
};