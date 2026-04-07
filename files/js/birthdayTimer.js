// code by qwkrtezzz (https://github.com/nubovik01)
// file created at 7 April 2026 05:31:49 PM (UTC+3)

function updateBirthdayTimer() {
  const now = new Date();
  let birthday = new Date(Date.UTC(now.getFullYear(), 3, 9));
  birthday.setUTCHours(birthday.getUTCHours() - 3);

  if (now > birthday) birthday.setUTCFullYear(birthday.getUTCFullYear() + 1);

  const diff = birthday - now;
  document.getElementById("birthday-timer").innerHTML = `
    <span>${Math.floor(diff / 86400000)}d</span>
    <span>${Math.floor((diff / 3600000) % 24)}h</span>
    <span>${Math.floor((diff / 60000) % 60)}m</span>
    <span>${Math.floor((diff / 1000) % 60)}s</span>
  `;
};

document.addEventListener("DOMContentLoaded", () => {
  setInterval(updateBirthdayTimer, 1000);
  updateBirthdayTimer();
});