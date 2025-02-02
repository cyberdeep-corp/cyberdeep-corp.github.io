// Import Load Snippets
import {
    load_snippet_class,
    load_css,
    load_js
} from './loads.js';

// Loads Templated Header and Footer in the Root page
export function load_template_header_footer() {
    load_snippet_class("/static/header.html", ".header");
    load_snippet_class("/static/footer.html", ".footer");
};