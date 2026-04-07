// code by qwkrtezzz (https://github.com/nubovik01)
// file created at 7 April 2026 05:31:49 PM (UTC+3)

function updateBirthdayTimer() {
  const now = new Date();
  let birthday = new Date(Date.UTC(now.getFullYear(), 3, 9));
  birthday.setUTCHours(birthday.getUTCHours() - 3);

  if (now > birthday) birthday.setUTCFullYear(birthday.getUTCFullYear() + 1);

  if (now.getUTCDate() === birthday.getUTCDate() && now.getUTCMonth() === birthday.getUTCMonth()) {
    document.getElementById("birthday-timer").innerHTML = "<span>right now! 🎉🥳</span>";
    return;
  };

  const diff = birthday - now;
  const birthdayDays = Math.floor(diff / 86400000);
  const birthdayHours = Math.floor((diff / 3600000) % 24);
  const birthdayMinutes = Math.floor((diff / 60000) % 60);
  const birthdaySeconds = Math.floor((diff / 1000) % 60);

  let parts = [];
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