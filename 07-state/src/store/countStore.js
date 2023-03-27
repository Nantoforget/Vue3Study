//引入函数 defineStore()
import { defineStore } from "pinia";

//通过函数defineStore()来创建store
export const useCountStore = defineStore("count", {
    /* state: () => {
        return {
            name: "孙悟空",
            age: 18,
        };
    }, */
    //配置对象：state函数返回的是一个对象
    //数据
    state: () => ({
        count: 100,
        name: "孙悟空",
    }),
    //计算属性
    getters: {
        double: (state) => state.count * 2,
    },
    //方法
    actions: {
        changeCount() {
            this.count++;
        },
    },
});
