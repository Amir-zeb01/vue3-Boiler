import { createApp } from "vue";
// bootstrap 5 imports
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./assets/font/font.css?family=Goldplay:100,300,400,500,600,700,900&display=swap";

import App from "./App.vue";
import router from "./router";

import FontAwesomeIcon from "./fa";

import titleMixin from "./mixins/titleMixin";

Vue.mixin(titleMixin);
Vue.component("fa", FontAwesomeIcon);

const app = createApp(App);

app.use(router);
app.mount("#app");

import "bootstrap/dist/js/bootstrap.min.js";
