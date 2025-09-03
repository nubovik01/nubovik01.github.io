// code by qwkrtezzz (https://github.com/nubovik01)
// file created at 03 September 2025 22:54:20 PM (UTC+3)

document.addEventListener("DOMContentLoaded", async () => {
  const images = document.querySelectorAll(".slide img");
  const slide = document.querySelector(".slide");

  let photoIndex = 0;

  function updateSlide() {
    slide.style.transform = `translateX(-${photoIndex * 100}%)`;
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

  let startSwipeCoordinate = 0;
  let endSwipeCoordinate = 0;

  slide.addEventListener('touchstart', start => {
    startSwipeCoordinate = start.touches[0].clientX;
  });

  slide.addEventListener('touchmove', move => {
    endSwipeCoordinate = move.touches[0].clientX;
  });

  slide.addEventListener('touchend', () => {
    const diff = startSwipeCoordinate - endSwipeCoordinate;

    if (diff > 50) {
      photoIndex = (photoIndex + 1) % images.length;

      updateSlide();
    } else if (diff < -50) {
      photoIndex = (photoIndex - 1 + images.length) % images.length;

      updateSlide();
    };
  });
});