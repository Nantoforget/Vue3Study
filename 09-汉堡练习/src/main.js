import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/main.css";
//引入pinia
import { createPinia } from "pinia";
const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.mount("#app");
