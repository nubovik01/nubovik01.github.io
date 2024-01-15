// code by qwkrtezzz (https://github.com/nubovik01)
// code writted at 1 January 2024 08:06:31 PM (UTC+3)
// v2.0 writted at 15 January 2024 11:59:26 AM (UTC+3)

const winterMonths = [12, 1, 2];
const currentMonth = new Date().getMonth() + 1;
const snowWorkMonths = winterMonths.includes(currentMonth);
const flakeCount = 500;

// change snowfall visibility
if (!checkSnowfallVisibility()) setCookie('snowfallVisibility', true, 'forever');

const changeSnowVisibilityButton = document.getElementById('changeVisibilitySnowfall');

if (changeSnowVisibilityButton) {
  changeSnowVisibilityButton.onclick = function () {
    const visibility = checkSnowfallVisibility() === 'true' ? false : true;
    setCookie('snowfallVisibility', visibility, 'forever');

    if (getCookie('theme') == 'black' && snowWorkMonths && checkSnowfallVisibility() == 'true') {
      $(document).snowfall({ flakeCount: flakeCount });
    } else {
      $(document).snowfall('clear');
    };
  };
};

// enable snowfall on page!
snowWorkMonths && checkSnowfallVisibility() === 'true' && $(document).ready(() => {
  getCookie('theme') !== 'white' && $(document).snowfall({ flakeCount: flakeCount });
});

$(window).resize(() => {
  $(document).snowfall('clear');
  if (getCookie('theme') === 'black' && checkSnowfallVisibility() === 'true') {
    $(document).snowfall({ flakeCount });
  }
});