// code by qwkrtezzz (https://github.com/nubovik01)
// file created at 19 August 2024 03:38:25 PM (UTC+3)

const platform = window.location.search.split("?r=")[1] || window.location.hash.split("#")[1];
const urls = {
  "kladmen-rabota": "https://youtu.be/dQw4w9WgXcQ",
  "flameout-rip": "https://t.me/flameoutupdates/845",
  screenshot: "https://nubovik01.github.io/prntsc-screamer",
  "ds-serv": "https://discord.gg/EJc8UC7yhZ",
  ds: "https://discord.gg/EJc8UC7yhZ",
  vk: "https://vk.com/qwkrtezzz",
  blog: "https://t.me/nbvkxd",
  bio: "https://t.me/nbvkbio",
  mt: "https://monkeytype.com/profile/qwkrtezzz",
  spotify: "https://open.spotify.com/user/tx9f1ojp5ghsdkbsrn085sn2k",
  tt: "https://tiktok.com/@nubovik",
  tg: "https://t.me/qwkrzbot",
  faq: "https://t.me/qwkrzfaq",
  gh: "https://github.com/nubovik01",
  circus: "https://t.me/nbvkcircus",
  pint: "https://ru.pinterest.com/qwkrtezzz",
  twx: "https://x.com/impostornubovik",
  redit: "https://reddit.com/user/nubovik01",
  dnt: "https://telegra.ph/tip-me-05-10",
  stim: "https://steamcommunity.com/id/nubovik01",
  ymuz: "https://music.yandex.ru/users/Nubovikgg/"
};

if (platform && urls[platform]) window.location.href = urls[platform];

if (!urls[platform]) console.log("[!] There doesn't seem to be such a redirect...");
