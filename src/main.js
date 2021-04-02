import { createApp } from 'vue'
import App from './App.vue'

global.jQuery = require("jquery");
var $ = global.jQuery;
window.$ = $;

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/styles.css";
import "jquery/dist/jquery.min.js";
import "./assets/scripts/scripts.js";



createApp(App).mount('#app')
