//引入vue
import { createApp } from "vue/dist/vue.esm-bundler.js";
//创建一个根组件
const App = {
    data() {
        return {
            message: "哈哈哈",
        };
    },
    template: "<h1>你好{{message}}</h1>",
};
createApp(App).mount("#app");
