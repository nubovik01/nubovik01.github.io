// code by qwkrtezzz (https://github.com/nubovik01)
// file created at 17 February 2024 01:57:08 AM (UTC+3)

class Commit {
  constructor() {
    this.owner = "nubovik01";
    this.repo = "nubovik01.github.io";
    this.apiUrl = `https://api.github.com/repos/${this.owner}/${this.repo}/commits`;
  };

  async getInfo() {
    const api = await fetch(this.apiUrl);
    if (api.status !== 200) return console.warn("[!] An error while getting commit from GitHub.");
    const firstCommit = (await api.json())[0];
    return {
      sha: firstCommit.sha.slice(0, 7),
      date: firstCommit.commit.author.date.slice(0, 10).replace(/-/g, '.')
    };
  };

  update() {
    const element = document.getElementById("commit");
    this.getInfo().then(result => {
      if (!result) throw new Error("No result from GitHub.");
      element.innerText = `sha ${result.sha} · ${result.date} (UTC)`;
      if (element.hasAttribute("hidden")) element.toggleAttribute("hidden");
    }).catch(error => {
      console.warn("[!] An error occurred while displaying information.");
      console.error(error);
    });
  };
};