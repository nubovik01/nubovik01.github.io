// Code by RedGuy (redguy.ru)
// Slightly changed due to bugs on the iPhone

class Loader {
    constructor(resources = [], options = {
        loadColor: "#ff1702",
        htmlURL: "https://static.redguy.ru/html/loader.html",
        cssURL: "https://static.redguy.ru/css/loader.css"
    }) {
        if (!options.loadColor) options.loadColor = "#ff1702";
        if (!options.htmlURL) options.htmlURL = "https://static.redguy.ru/html/loader.html";
        if (!options.cssURL) options.cssURL = "https://static.redguy.ru/css/loader.css";

        let html = document.getElementsByTagName("html")[0];
        // html.style.visibility = "hidden";
        let div = document.createElement('div');
        div.id = "load-roller";
        div.style.backgroundColor = options.loadColor;
        div.style.visibility = "visible";
        html.appendChild(div);

        window.resource = resources.reverse();
        window.loadpromises = [];
        window.onload = Loader.onpageload;
        let x = new XMLHttpRequest();
        x.open("GET", options.htmlURL, true);
        x.onload = function () {
            div.innerHTML = x.responseText;
            let link = document.createElement("link");
            link.setAttribute("rel", "stylesheet");
            link.setAttribute("type", "text/css");
            link.setAttribute("href", options.cssURL);
            link.id = "load-css";
            document.getElementsByTagName("head")[0].appendChild(link);
        };
        x.send(null);
    }

    static onpageload() {
        if (window.resource.length > 0) {
            let x = window.resource.pop();
            if (typeof x === "string") {
                x = x.trim();
                console.log('LOAD '+x);
                if (x.endsWith("js")) {
                    let js = document.createElement("script");
                    js.src = x;
                    js.type = "text/javascript";
                    js.onload = Loader.onpageload;
                    document.head.appendChild(js);
                } else if (x.endsWith("css")) {
                    let link = document.createElement("link");
                    link.setAttribute("rel", "stylesheet");
                    link.setAttribute("type", "text/css");
                    link.setAttribute("href", x);
                    link.onload = Loader.onpageload;
                    document.head.appendChild(link);
                }
            } else {
                console.log(x.url + " with type " + x.type);
                window.loadpromises.push(new Promise(((resolve, reject) => {
                    switch (x.type) {
                        case "js":
                            let js = document.createElement("script");
                            js.src = x.url;
                            js.type = "text/javascript";
                            js.onload = resolve;
                            break;
                        case "css":
                            let link = document.createElement("link");
                            link.setAttribute("rel", "stylesheet");
                            link.setAttribute("type", "text/css");
                            link.setAttribute("href", x.url);
                            link.onload = resolve;
                            document.head.appendChild(link);
                            break;
                        case "audio":
                            let audio = window.audio;
                            audio.load(x.name, x.url);
                            resolve();
                            break;
                        case "code":
                            x.cb();
                            resolve();
                            break
                    }
                    Loader.onpageload();
                })));
            }
        } else {
            Promise.all(window.loadpromises).then(() => {
                document.body.style.visibility = "visible";
            });
        }
    }
}