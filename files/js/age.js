// code by qwkrtezzz (https://github.com/nubovik01)
// file created at 3 October 2024 02:00:12 AM (UTC+3)

function calculateAge(birth) {
  const [day, month, year] = birth.split(".").map(Number);

  const today = new Date(new Date().toLocaleString("en-US", { timeZone: "Europe/Moscow" }));

  let age = today.getFullYear() - year;

  if (today.getMonth() < month - 1 || (today.getMonth() === month - 1 && today.getDate() < day)) {
    age--;
  };

  return age;
};