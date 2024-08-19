// code by qwkrtezzz (https://github.com/nubovik01)
// file created at 19 August 2024 03:38:25 PM (UTC+3)

const platform = window.location.search.split("?r=")[1];
const urls = {
  "ds-serv": "https://discord.gg/EJc8UC7yhZ",
  vk: "https://vk.com/qwkrtezzz",
  blog: "https://t.me/nbvkxd"
};

if (platform && urls[platform]) window.location.href = urls[platform];