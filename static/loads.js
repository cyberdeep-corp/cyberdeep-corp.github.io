export function load_snippet_class(filename, classname) {
    let loadaddr;
    if (classname[0] == ".") {
        loadaddr = document.querySelector(classname);
    } else {
        loadaddr = document.querySelector(`.${classname}`);
    }

    fetch(filename)
    .then(res => {
        if (res.ok) {
            return res.text();
        }
    })
    .then(html => {
        loadaddr.innerHTML = html;
    });
};

export function load_json(filename) {
    let loadaddr = document.querySelector(`.${classname}`);

    fetch(filename)
    .then(res => {
        if (res.ok) {
            return res.json();
        }
    })
    .then(json => {
        loadaddr.innerHTML = json;
    });
};

export function load_css(filename) {
    let loadaddr = document.getElementsByClassName("style")

    fetch(`/static/site/${filename}.css`)
    .then(res => {
        if (res.ok) {
            return res.text();
        }
    })
    .then(css => {
        loadaddr.innerHTML = css;
    });
};
    
export function load_js(filename) {
    let loadaddr = document.getElementsByTagName("script")

    fetch(`/static/site/${filename}.js`)
    .then(res => {
        if (res.ok) {
            return res.text();
        }
    })
    .then(js => {
        loadaddr.innerHTML = js;
    });
};
