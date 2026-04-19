// code by qwkrtezzz (https://github.com/nubovik01)
// file created at 8 April 2026 10:02:12 PM (UTC+3)

const alertRadius = 10;
const alertFullDash = 2 * Math.PI * alertRadius;

function showAlert({ text, duration = 3, delay = 0 }) {
  setTimeout(() => {
    const alert = document.createElement("div");
    alert.className = "alert";

    const span = document.createElement("span");
    span.innerHTML = text;
    alert.appendChild(span);

    const closeContainer = document.createElement("div");
    closeContainer.className = 'close-container';

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "24");
    svg.setAttribute("height", "24");

    const background = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    background.classList.add("background");
    background.setAttribute("r", alertRadius);
    background.setAttribute("cx", 12);
    background.setAttribute("cy", 12);

    const loader = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    loader.classList.add("loader");
    loader.setAttribute("r", alertRadius);
    loader.setAttribute("cx", 12);
    loader.setAttribute("cy", 12);
    loader.style.strokeDasharray = alertFullDash;
    loader.style.strokeDashoffset = alertFullDash;

    svg.appendChild(background);
    svg.appendChild(loader);
    closeContainer.appendChild(svg);

    const closeSpan = document.createElement("span");
    closeSpan.innerHTML = "&times;";
    closeContainer.appendChild(closeSpan);

    closeContainer.onclick = () => closeAlert({ alert, loader, background, closeSpan });
    alert.appendChild(closeContainer);

    document.body.appendChild(alert);
    requestAnimationFrame(() => animateAlert({ alert, loader, background, closeSpan, duration }));
  }, delay * 1000);
};

function animateAlert({ alert, loader, background, closeSpan, duration }) {
  requestAnimationFrame(() => alert.classList.add("show"));

  let start = performance.now();
  function animate(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / (duration * 1000), 1);
    loader.style.strokeDashoffset = alertFullDash * (1 - progress);

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      background.style.fill = "var(--text-color)";
      closeSpan.style.color = "var(--background-color)";
      background.style.stroke = "none";
      setTimeout(() => closeAlert({ alert, loader, background, closeSpan }), 100);
    }
  }
  requestAnimationFrame(animate);
};

function closeAlert({ alert, loader, background, closeSpan }) {
  if (!alert) return;

  alert.classList.remove("show");
  loader.style.strokeDashoffset = alertFullDash;

  setTimeout(() => {
    background.style.fill = "transparent";
    closeSpan.style.color = "var(--text-color)";
    background.style.stroke = "var(--cards-link-color)";
    alert.remove();
  }, 100);
};