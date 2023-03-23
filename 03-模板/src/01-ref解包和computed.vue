<template>
    <h1>{{ msg }}</h1>
    <h2>{{ cMsg }}</h2>
    <!--
        ref对象在模板中可以自动解包(要求ref对象必须是顶层对象) 
        name不是顶层响应式对象，所以不能自动解包，要带.value
    -->
    <h1>{{ obj.name.value }}</h1>
</template>
<script setup>
import { ref, reactive, computed } from "vue"
let msg = ref("哈哈哈哈哈")
const obj = {
    name: ref("孙悟空"),
    age: 18
}
const cMsg = computed(() => {
    return msg.value + "嘿嘿嘿"
})
</script>