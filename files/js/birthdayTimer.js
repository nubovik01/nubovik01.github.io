// code by qwkrtezzz (https://github.com/nubovik01)
// file created at 7 April 2026 05:31:49 PM (UTC+3)

function updateBirthdayTimer() {
  const now = new Date();
  const moscowTime = new Date(now.toLocaleString("en-US", { timeZone: "Europe/Moscow" }));

  let birthday = new Date(moscowTime.getFullYear(), 3, 9);

  if (moscowTime > birthday) birthday.setFullYear(birthday.getFullYear() + 1);

  if (
    moscowTime.getDate() === birthday.getDate() && moscowTime.getMonth() === birthday.getMonth()
  ) {
    return document.getElementById("birthday-timer").innerHTML = "<span>right now! 🎉🥳</span>";
  };

  const diff = birthday - moscowTime;

  const birthdayDays = Math.floor(diff / 86400000);
  const birthdayHours = Math.floor((diff / 3600000) % 24);
  const birthdayMinutes = Math.floor((diff / 60000) % 60);
  const birthdaySeconds = Math.floor((diff / 1000) % 60);

  const parts = [];
  if (birthdayDays) parts.push(`<span>${birthdayDays}d</span>`);
  if (birthdayHours) parts.push(`<span>${birthdayHours}h</span>`);
  if (birthdayMinutes) parts.push(`<span>${birthdayMinutes}m</span>`);
  if (birthdaySeconds) parts.push(`<span>${birthdaySeconds}s</span>`);

  document.getElementById("birthday-timer").innerHTML = parts.join(" ");
};

document.addEventListener("DOMContentLoaded", () => {
  setInterval(updateBirthdayTimer, 1000);
  updateBirthdayTimer();
});