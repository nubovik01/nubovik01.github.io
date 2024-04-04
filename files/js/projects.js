// code by qwkrtezzz (https://github.com/nubovik01)
// file created at 28 March 2024 10:33:59 PM (UTC+3)

const projectsJson = [
  {
    title: "BotDobryak",
    icon: "./files/images/logos/bots/botdobryak/botdobryak.png",
    working: "2019—2020",
    show: true,
  },
  {
    title: "FlameOut",
    icon: "./files/images/logos/bots/flameout/flame_64x64.png",
    link: "https://nubovik.gitbook.io/flameout",
    shortLink: "gitbook.io",
    description: `
      Многофункциональный бот в Discord с множеством полезных и самых
      необходимых возможностей, состоящий на более чем 600 серверах
      и имеющий 290+ тысяч пользователей из разных уголков планеты.
    `,
    working: "2020—2024'Q1",
    show: true
  },
  {
    title: "anti-auth-pornhub",
    link: "https://github.com/nubovik01/anti-auth-pornhub",
    shortLink: "github.com",
    description: `
      Браузерный скрипт для расширения Tampermonkey в пару строк. Позволяет
      обходить обязательную авторизацию на PornHub для пользователей из РФ.
    `,
    working: "2022—2023",
    show: true
  },
  {
    title: "auto-bonus-claim-twitch",
    link: "https://github.com/nubovik01/auto-bonus-claim-twitch",
    description: `
      Браузерный скрипт для расширения Tampermonkey, позволяющий автоматически
      собирать баллы канала на Twitch при просмотре стримов.
    `,
    shortLink: "github.com",
    working: "2022-2023",
    show: false
  },
  {
    title: "genpass",
    link: "https://github.com/nubovik01/genpass",
    shortLink: "github.com",
    working: "2022-2023",
    show: false
  },
  {
    title: "nbvk-quotes-api",
    link: "https://github.com/nubovik01/nbvk-quotes-api",
    shortLink: "github.com",
    working: "2023",
    show: false
  },
  {
    title: "downloader-js",
    link: "https://github.com/nubovik01/downloader-js",
    shortLink: "github.com",
    description: `
      Фановый скрипт. Делался чисто по приколу из-за отсутствия капчи на сайте
      знакомого, который сохранял картинки по нумерации.
    `,
    working: "2023",
    show: true
  },
  {
    title: "NyanBot",
    icon: "./files/images/noAvatarDiscord2.png",
    link: "https://github.com/nubovik01/nyanbot",
    shortLink: "github.com",
    working: "2023—2024'Q1",
    show: true
  },
  {
    title: "Korean Agent",
    icon: "./files/images/logos/bots/koreanagent/KoreanAgentBot_Avatar-150x150.png",
    link: "https://t.me/koreanagentbot",
    shortLink: "telegram.me",
    description: `
      Игровой бот с небольшим уклоном на Северную Корею (КНДР) в мессенджере Telegram.
    `,
    working: "2024",
    show: true
  }
];

const Projects = function () {
  this.kekw = true;
};

Projects.prototype.list = function (sort = "prepend") {
  const projectsElement = document.getElementsByClassName("projects")[0];
  if (projectsElement.hasAttribute("hidden")) projectsElement.toggleAttribute("hidden");
  projectsElement.innerHTML = "";

  for (const project of projectsJson) {
    if (project.show) {
      const newProjectElement = document.createElement("div");

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
                ${project.title}<br>
                ${projectLink}
              </div>
            </div>
          ${project.link ? "</a>" : ""}
          ${projectDescription}
        </div>
      `;

      projectsElement[sort](newProjectElement);
    }
  };
}