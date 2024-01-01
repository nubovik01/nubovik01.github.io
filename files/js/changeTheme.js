// code by qwkrtezzz (github.com/nubovik01)
// file created at 9 December 2023 07:50:17 PM (UTC+3)

if(checkUserTheme() == undefined) setCookie('theme', 'black', 'forever');

document.body.classList.add(checkUserTheme() + '-theme');

const changeThemeButton = document.getElementById('changeThemeButton');

if (changeThemeButton) {
  changeThemeButton.onclick = function () {
    document.body.classList.toggle('white-theme');
    document.body.classList.toggle('black-theme');

    const theme = checkUserTheme() === 'white' ? 'black' : 'white';
    setCookie('theme', theme, 'forever');

    if (theme == 'white' && $(document).snowfall()) {
      $(document).snowfall('clear');
    } else if (theme == 'black' && winterMonths.includes(currentMonth)) {
      $(document).snowfall({ flakeCount: 1000 });
    };
  };
};