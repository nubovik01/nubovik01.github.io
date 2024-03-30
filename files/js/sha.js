// code by qwkrtezzz (https://github.com/nubovik01)
// file created at 17 February 2024 01:57:08 AM (UTC+3)

const Commit = function () {
  this.owner = "nubovik01";
  this.repo = "nubovik01.github.io";
  this.apiUrl = `https://api.github.com/repos/${this.owner}/${this.repo}/commits`;

  this.getInfo = async function () {
    const response = await fetch(this.apiUrl);
    const firstCommit = (await response.json())[0];

    const sha = firstCommit.sha.slice(0, 7);
    const date = firstCommit.commit.author.date.slice(0, 10).replace(/-/g, '.');

    return { sha, date };
  };
};

Commit.prototype.update = function () {
  const element = document.getElementById("commit");

  this.getInfo().then(result => {
    element.innerText = `sha ${result.sha} · ${result.date} (UTC)`;
  }).catch(error => {
    console.log("An unexpected error occurred while trying to get information from GitHub.");
    console.error(error);
  });
};