// code by qwkrtezzz (github.com/nubovik01)
// file created at 9 December 2023 19:50:17 PM (UTC+3)

if (checkUserTheme() == 'white') {
  document.body.classList.toggle('white-theme');
};

document.querySelector('#changeThemeButton').onclick = function () {
  document.body.classList.toggle('white-theme');

  if (checkUserTheme() == 'white') {
    document.cookie = "theme=black; max-age=31536000;";
  } else {
    document.cookie = "theme=white; max-age=31536000;";
  };

  location.reload();
};