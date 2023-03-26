<template>
    <h1>{{ count }}</h1>
    <!-- 
        绑定事件的两种方式
            1.内联事件处理器(可以用$event作为参数来传递事件对象)
                -事件触发时，直接执行js语句
            2.方法事件处理器(vue帮我们传了事件对象event)
                -事件触发时，vue会对时间的函数进行调用
            vue如何区分两种处理器：
                检查事件的值是否合法的js标识符或属性访问路径，
                    是，则表示它是方法事件处理器
                    否，表示它是内联事件处理器
    -->
    <button @click="count++">Click Me</button>
    <button @click="change($event)">Click Me</button>
</template>

<script setup>
import { ref } from "vue"
let count = ref(0)
const change = (event) => {
    console.log(event);
}
</script>

<style scoped></style>