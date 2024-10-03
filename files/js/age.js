// code by qwkrtezzz (https://github.com/nubovik01)
// file created at 3 October 2024 02:00:12 AM (UTC+3)

function calculateAge(birth) {// mm/dd/yyyy
  const [birthDate, today] = [new Date(birth), new Date()];

  let age = today.getFullYear() - birthDate.getFullYear();
  const month = today.getMonth() - birthDate.getMonth();

  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  };

  return age;
};