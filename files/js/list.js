function makeList(elementName, list) {
  const wrap = document.getElementById(elementName);

  list.forEach(function (object) {
    const row = document.createElement("div");
    row.className = "list";

    const head = document.createElement("div");

    if (object.icon) {
      const image = document.createElement("img");

      image.src = object.icon;
      image.alt = "";

      head.appendChild(image);
    };

    const name = document.createElement("span");
    name.className = "name";
    name.textContent = object.title;
    head.appendChild(name);

    if (object.link) {
      const link = document.createElement("a");

      link.className = "link";
      link.href = object.link;
      link.textContent = "open";

      head.appendChild(link);
    };

    row.appendChild(head);

    if (object.description) {
      const description = document.createElement("p");

      description.textContent = object.description;

      row.appendChild(description);
    };

    if (object.status) {
      const status = document.createElement("p");

      status.className = "status";
      status.textContent = object.status;

      row.appendChild(status);
    };

    wrap.appendChild(row);
  });
};