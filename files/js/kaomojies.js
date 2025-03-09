// code by qwkrtezzz (https://github.com/nubovik01)
// file created at 10 February 2025 07:16:11 PM (UTC+3)

const kaomojiesList = [
  "(⁄⁄>⁄▽⁄<⁄⁄)",
  "‿︵‿ヽ(°□° )ノ︵‿︵",
  "┬┴┬┴┤(･_├┬┴┬┴",
  "ヾ( ˃ᴗ˂ )◞ • *✰",
  "(´-ω･)︻┻┳══━一",
  "(ﾉ>ω<)ﾉ :･ﾟ*:･ﾟ’☆"
];

let kaomojiIdCache = null;

function changeKaomoji() {
  do {
    id = Math.floor(Math.random() * kaomojiesList.length);
  } while (
    id === kaomojiIdCache
  );

  document.getElementById("kaomoji").textContent = kaomojiesList[id];
  kaomojiIdCache = id;
};

window.onload = () => changeKaomoji();