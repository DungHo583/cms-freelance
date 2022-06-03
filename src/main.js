import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import BootstrapVue3 from "bootstrap-vue-3";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
import vClickOutside from "click-outside-vue3";

const app = createApp(App);

app.use(BootstrapVue3);
app.use(router);
app.use(vClickOutside);

app.mount("#app");
