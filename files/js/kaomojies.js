// code by qwkrtezzz (https://github.com/nubovik01)
// file created at 10 February 2025 07:16:11 PM (UTC+3)

const kaomojiesList = [
  "(⁄⁄>⁄▽⁄<⁄⁄)",
  "‿︵‿ヽ(°□° )ノ︵‿︵",
  "┬┴┬┴┤(･_├┬┴┬┴",
  "ヾ( ˃ᴗ˂ )◞ • *✰",
  "(´-ω･)︻┻┳══━一",
  // i luv my bf:3
  "(ﾉ>ω<)ﾉ :･ﾟ*:･ﾟ’☆"
];

let kaomojiIdCache = null;

function changeKaomoji() {
  const htmlElement = document.getElementById("kaomoji");
  let id, kaomoji;

  do {
    id = Math.floor(Math.random() * kaomojiesList.length);
    kaomoji = kaomojiesList[id];
  } while (
    kaomoji && id === kaomojiIdCache
  );

  htmlElement.textContent = kaomoji;
  kaomojiIdCache = kaomoji ? id : kaomojiIdCache;
};

window.onload = () => changeKaomoji();