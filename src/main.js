import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/output.css";
import "boxicons";

createApp(App).use(router).mount("#app");
