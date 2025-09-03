// code by qwkrtezzz (https://github.com/nubovik01)
// file created at 03 September 2025 22:54:20 PM (UTC+3)

document.addEventListener("DOMContentLoaded", async () => {
  const images = document.querySelectorAll(".slide img");

  let photoIndex = 0;

  function updateSlide() {
    document.querySelector(".slide").style.transform = `translateX(-${photoIndex * 100}%)`;
  };

  document.querySelector(".next-button").addEventListener("click", () => {
    photoIndex++;

    if (photoIndex >= images.length) {
      photoIndex = 0;
    };

    updateSlide();
  });

  document.querySelector(".previor-button").addEventListener("click", () => {
    photoIndex--;

    if (photoIndex < 0) {
      photoIndex = images.length - 1;
    };

    updateSlide();
  });
});