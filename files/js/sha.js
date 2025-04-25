// code by qwkrtezzz (https://github.com/nubovik01)
// file created at 17 February 2024 01:57:08 AM (UTC+3)

document.addEventListener("DOMContentLoaded", async () => {
  const api = await fetch("https://api.github.com/repos/nubovik01/nubovik01.github.io/commits");
  
  if (!api.ok) throw new Error("[!] An error while getting commit from GitHub.");

  const commit = (await api.json())[0];

  const sha = commit.sha.slice(0, 7);
  const date = commit.commit.author.date.slice(0, 10).replace(/-/g, ".");
  
  document.getElementById("commit").innerText = `sha ${sha} · ${date} (UTC)`;
});