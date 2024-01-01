// code by qwkrtezzz (github.com/nubovik01)
// file created at 9 December 2023 07:50:17 PM (UTC+3)

document.body.classList.add(checkUserTheme() + '-theme');

const changeThemeButton = document.getElementById('changeThemeButton');

if (changeThemeButton) {
  changeThemeButton.onclick = function () {
    document.body.classList.toggle('white-theme');
    document.body.classList.toggle('black-theme');

    const theme = checkUserTheme() === 'white' ? 'black' : 'white';
    document.cookie = "theme=" + theme + "; max-age=31536000;";

    if (theme == 'white' && $(document).snowfall()) {
      $(document).snowfall('clear');
    } else if (theme == 'black' && winterMonths.includes(currentMonth)) {
      $(document).snowfall({ flakeCount: 1000 });
    };
  };
};