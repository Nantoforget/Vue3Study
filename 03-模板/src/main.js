import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);
//必须在挂载前声明
app.config.globalProperties.alert = alert.bind(this);
app.mount("#app");
