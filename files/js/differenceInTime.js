// code by qwkrtezzz (github.com/nubovik01)
// file created at 26 August 2023 04:52:29 PM (UTC+3)

function differenceInTime(referenceDate) {
  const startDate = new Date(referenceDate);
  const currentDate = new Date();
  const differenceInTime = currentDate.getTime() - startDate.getTime();
  const differenceInDays = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));

  return differenceInDays;
};