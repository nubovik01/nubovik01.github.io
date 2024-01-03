// code by qwkrtezzz (https://github.com/nubovik01)
// file created at 1 January 2024 06:20:09 PM (UTC+3)

function setCookie(name, value, time) {
  if (time == 'forever') {
    document.cookie = `${name}=${value}; max-age=31536000;`;
    console.log(`%cA persistent cookie "${name}" with value "${value}" was created.`, 'color: lightblue;');
  } else if (Number(time) && !isNaN(time)) {
    document.cookie = `${name}=${value}; max-age=${time};`;
    console.log(
      `%cCreated a cookie expiring in ${time} seconds with name "${name}" and value "${value}"`, 'color: lightblue;'
    );
  } else {
    document.cookie = `${name}=${value};`;
    console.log(`%cA cookie "${name}" with value "${value}" was created for one session.`, 'color: lightblue;');
  };
};

function getCookie(name) {
  const value = "; " + document.cookie;
  const parts = value.split("; " + name + "=");
  if (parts.length === 2) return parts.pop().split(";").shift();
};

function closeCookieBlock() {
  document.getElementById("block-about-cookie").remove();

  console.log('HTML block with alert about cookie-files was closed.');

  if (!getCookie("stopCookieAlert")) setCookie('stopCookieAlert', true, 'forever');
};

function checkUserTheme() {
  return getCookie("theme");
};