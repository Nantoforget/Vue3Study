<template>
    <h1>{{ message }}</h1>
    <button @click="changeMsg">Click Me</button>
</template>
<script>
export default {
    //vm.$data是实际的代理对象，通过vm可以直接访问到$data中的属性
    //vm.$data.message等价于vm.message
    //可以通过vm.$data动态想组件中添加响应式数据
    data() {
        //有些场景需要ShallowReactive()来创建浅层的响应式数据
        return {
            message: "哈哈哈"
        }
    },
    /* 
        methods 用来指定实例对象中的方法
            -它是一个对象
            -最终会挂载到组件实例上
            -methods中的函数的this会被自动绑定为组件实例
     */
    methods: {
        changeMsg() {
            this.message = "嘿嘿嘿"
        }
    }
}
</script>