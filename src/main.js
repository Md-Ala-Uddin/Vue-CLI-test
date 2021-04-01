import { createApp } from 'vue'
import App from './App.vue'

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/styles.css";
import "jquery/dist/jquery.min.js";
import "./assets/scripts/scripts.js";

global.jQuery = require("jquery");
var $ = global.jQuery;
window.$ = $;

createApp(App).mount('#app')
