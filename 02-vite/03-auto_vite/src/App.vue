<template>
    <h1>{{ a }}</h1>
    <h1>{{ stu.name }}--{{ stu.age }}</h1>
</template>
<script setup>
import { ref, reactive } from 'vue';
/* 
    reactive()
        -返回一个对象的响应式代理
        -返回的是一个深层响应式对象
        -也可以使用shallowReactive()创建一个浅层响应式对象
        -缺点：
            -只能返回对象的响应式代理
 */
/* 
    ref在生成响应式代理时，它将值包装为了一个对象，需要用.value来获取
    在模板中，ref对象会被自动解包
    vue提供给我们一个语法糖，使ref对象在script标签中也能自动解包
    $是一个实验性的，需要在vite插件做一些中配置 reactivityTransform:true
    尽量别使用
 */
const stu = reactive({
    name: "孙悟空",
    age: 18
})
console.log(stu);
let a = $ref(10)
console.log(a);
</script>