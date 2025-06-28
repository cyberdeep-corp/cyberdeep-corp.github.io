// Import Template Snippets
import {
    load_template_header_footer
} from "./template.js"

// Import Loading Snippets
import {
    load_js,
    load_css
} from "./loads.js"

// Using 'page' as naming convention of document
let page = document;

let filename = page.URL.split("/")[-1];
let base_filename;

if (filename == "") {
    base_filename = "index";
} else {
    base_filename = filename;
}

console.log(base_filename);

// Loading Header and Footer
load_template_header_footer();

// Loading the JavaScript, CSS file according to the base filename of the page
//load_js(`/static/site/${base_filename}.js`);
//load_css(`/static/site/${base_filename}.css`);