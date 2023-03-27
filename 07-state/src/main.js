import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
const pinia = createPinia();
const app = createApp(App);
//将pinia设置为vue的插件
app.use(pinia).mount("#app");
