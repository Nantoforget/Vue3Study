//引入组件
import MyButton from "./components/MyButton";
//创建根组件
export default {
    data() {
        return {
            message: "哈哈哈",
            count: 0,
        };
    },
    components: {
        MyButton: MyButton,
    },
    template: `
    <h1>你好{{message}}</h1><br/>
    <button @click="count++">Click Me</button><h2>{{count}}</h2>
    <MyButton></MyButton>
    <MyButton></MyButton>
    <MyButton></MyButton>
    `,
};
