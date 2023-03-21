//封装一个自定义按钮
export default {
    data() {
        return {
            count: 0,
        };
    },
    template: `
    <button @click="count++">Click Me</button><h2>{{count}}</h2>
    `,
};
