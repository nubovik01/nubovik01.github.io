// code by qwkrtezzz (https://github.com/nubovik01)
// file created at 28 March 2024 10:33:59 PM (UTC+3)

const projectsJson = [
  {
    title: "BotDobryak",
    icon: "./files/images/logos/bots/botdobryak/botdobryak.webp"
  },
  {
    title: "FlameOut",
    description: `
      Многофункциональный бот для Discord с множеством полезных
      и самых необходимых возможностей для Вас и вашего сервера,
      состоящий на более чем 600 серверах (за всё время - 3k+)
      и имеющий 290k+ пользователей с разных уголков планеты.
    `,
    icon: "./files/images/logos/bots/flameout/flame_32x32.webp",
    link: "https://nubovik.gitbook.io/flameout",
    shortLink: "gitbook.io"
  },
  {
    title: "воздушный квиртиз.",
    description: "Мой личный канал в Telegram. Моя жизнь, немножко мемчиков, щитпоста и прочее...",
    icon: "./files/images/killua-blog-avatar.webp",
    link: "https://t.me/nbvkxd/",
    shortLink: "telegram.me"
  }
];

const Projects = function () {
  this.sort = "prepend"; // prepend or append
};

Projects.prototype.list = function () {
  const projectsElement = document.getElementsByClassName("projects")[0];
  if (projectsElement.hasAttribute("hidden")) projectsElement.toggleAttribute("hidden");
  projectsElement.innerHTML = "";

  for (const project of projectsJson) {
    const newProjectElement = document.createElement("div");
    newProjectElement.className = "project";

    const projectIcon = project.icon
      ? `
          <div>
            <img src="${project.icon}">
          </div>
        `
      : "";

    const projectLink = project.link && project.shortLink
      ? `
          <span class="link">
            ${project.shortLink}
          </span>
          <br>
        `
      : "";

    const projectDescription = project.description
      ? `
          <div class="description">
            <p>${project.description}</p>
          </div>
        `
      : "";

    newProjectElement.innerHTML = `
      <div class="native">
        ${project.link ? `<a href="${project.link}">` : ""}
          <div class="header">
            ${projectIcon}
            <div>
              ${project.title}
              ${project.link
                ? `<svg style="margin: 0 0 -1px -5px;" width="13" height="13" stroke="#757575" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 22 22" stroke-width="2"><path d="M12 6h-6a2 0 0 0 0 -2 2v10a2 0 0 0 0 2 2h10a2 0 0 0 0 2 -2v-6"></path><path d="M11 13l9 -9"></path><path d="M15 4h5v5"></path></svg>`
                : ""
              }
              <br>
              ${projectLink}
            </div>
          </div>
        ${project.link ? "</a>" : ""}
        ${projectDescription}
      </div>
    `;

    projectsElement[this.sort](newProjectElement);
  };
};