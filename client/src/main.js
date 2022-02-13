import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//vendor css
import "./assets/sass/vendor/flex-classes.css";
import "./assets/sass/vendor/normalize.css";
createApp(App).use(store).use(router).mount("#app");
