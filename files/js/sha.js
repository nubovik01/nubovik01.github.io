// code by qwkrtezzz (https://github.com/nubovik01)
// file created at 17 February 2024 01:57:08 AM (UTC+3)

const Commit = function () {
  this.getInfo = async (owner, repo) => {
    const api = await fetch(`https://api.github.com/repos/${owner}/${repo}/commits`);

    if (api.status !== 200) return console.warn("[!] An error while getting commit from GitHub.");

    const firstCommit = (await api.json())[0];

    return {
      sha: firstCommit.sha.slice(0, 7),
      date: firstCommit.commit.author.date.slice(0, 10).replace(/-/g, '.')
    };
  };
};

Commit.prototype.update = function (owner, repo) {
  this.getInfo(owner, repo).then(result => {
    if (!result) return console.warn("[!] No result from GitHub.");

    const element = document.getElementById("commit");
    if (element.hasAttribute("hidden")) element.toggleAttribute("hidden");
    element.innerText = `sha ${result.sha} · ${result.date} (UTC)`;
  }).catch(error => {
    console.warn("[!] An error occurred while displaying information.");
    console.error(error);
  });
};