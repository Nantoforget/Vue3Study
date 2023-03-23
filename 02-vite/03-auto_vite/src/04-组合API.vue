<template>
    <h1>组合式API</h1>
    <h2>我是a：{{ a }}</h2>
    <button @click="changeA">Click Me</button>
</template>
<script>
import { reactive, ref } from 'vue';
//可以通过reactive()来创建一个响应的对象
export default {
    setup() {
        let a = ref(10);
        const stu = reactive({
            name: "孙悟空",
            age: 18
        })
        function changeA() {
            a.value++
        }
        return {
            stu,
            a,
            changeA
        }
    }
}
</script>