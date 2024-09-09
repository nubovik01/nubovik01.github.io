// code by qwkrtezzz (https://github.com/nubovik01)
// file created at 28 March 2024 10:33:59 PM (UTC+3)

const projectsJson = [
  {
    title: "BotDobryak",
    icon: "./files/images/logos/botdobryak.webp",
    translate: false
  },
  {
    title: "FlameOut",
    icon: "./files/images/logos/flame_64x64.webp",
    link: "https://nubovik.gitbook.io/flameout"
  }
];

const projectTemplate = (project) => `
  <div class="native" ${!project.translate ? `translate="no"` : ""}>
    ${project.link ? `<a href="${project.link}" target="_blank">` : ""}
      <div class="header">
        ${project.icon ? `<div><img alt="${project.title}" src="${project.icon}"></div>` : ""}
        <div>
          ${project.title}
          ${project.link ? `<img id="blankImg" src="/files/images/newBlank.webp">` : ""}
          <br>
          ${project.link ? `<span class="link">${project.link.split('/')[2]}</span>` : ""}
        </div>
      </div>
    ${project.link ? "</a>" : ""}
    ${project.description ? `<div class="description"><p>${project.description}</p></div>` : ""}
  </div>
`;

function listProjects() {
  const projects = document.getElementsByClassName("projects")[0];
  if (projects.hasAttribute("hidden")) projects.toggleAttribute("hidden");

  projectsJson.forEach(project => {
    const element = document.createElement("div");
    element.className = "project";
    element.innerHTML = projectTemplate(project);
    projects.prepend(element);
  });
};