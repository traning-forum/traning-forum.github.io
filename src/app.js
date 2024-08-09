import page from "@page/page.mjs";
import { html, render } from "@lit/lit-html.js";
import {classMap} from "@lit/directives/class-map.js";
import {styleMap} from "@lit/directives/style-map.js";
import {until} from "@lit/directives/until.js";
import {repeat} from "@lit/directives/repeat.js";


page('/', homeView);

page.start();

function homeView(){
    render(html`<h1>Hello world!</h1>`, document.body)
}