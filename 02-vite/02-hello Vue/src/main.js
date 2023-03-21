//引入vue
import { createApp } from "vue/dist/vue.esm-bundler.js";
//引入根组件
import App from "./App";

//创建应用挂载
//mount()的返回值是根组件的实例
const vm = createApp(App).mount("#app");
