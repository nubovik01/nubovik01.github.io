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

      newProjectElement.className = "project";

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
