// code by qwkrtezzz (https://github.com/nubovik01)
// file created at 3 October 2024 02:00:12 AM (UTC+3)

function convertDateFormat(date) { // dd.mm.yyyy => yyyy-mm-dd
  const parts = date.split('.');
  return `${parts[2]}-${parts[1]}-${parts[0]}`;
};

// https://stackoverflow.com/questions/4060004/
function calculateAge(birth) {
  const [birthDate, today] = [new Date(convertDateFormat(birth)), new Date()];

  let age = today.getFullYear() - birthDate.getFullYear();
  const month = today.getMonth() - birthDate.getMonth();

  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  };

  return age;
};