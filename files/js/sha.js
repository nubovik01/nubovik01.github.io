// code by qwkrtezzz (https://github.com/nubovik01)
// file created at 17 February 2024 01:57:08 AM (UTC+3)

async function getCommit() {
  const api = await fetch(`https://api.github.com/repos/nubovik01/nubovik01.github.io/commits`);

  if (api.status !== 200) return console.warn("[!] An error while getting commit from GitHub.");

  const firstCommit = (await api.json())[0];

  return {
    sha: firstCommit.sha.slice(0, 7),
    date: firstCommit.commit.author.date.slice(0, 10).replace(/-/g, '.')
  };
};

function updateSha() {
  getCommit().then(result => {
    if (!result) return console.warn("[!] No result from GitHub.");

    const element = document.getElementById("commit");

    element.innerText = `sha ${result.sha} · ${result.date} (UTC)`;
  }).catch(error => {
    console.warn("[!] An error occurred while displaying information.");
    console.error(error);
  });
};

document.addEventListener('DOMContentLoaded', () => {
  updateSha();
});