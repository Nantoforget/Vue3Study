<template>
    <!-- 
    component 是一个动态组件
        - component最终是以什么标签来展现得是由is属性来决定
    
    -->
    <!-- <component is="h1">哈哈哈</component> -->
    <button @click="isShow = !isShow">Click Me</button>
    <component :is="isShow ? A : B"></component>
</template>

<script setup>
import { ref } from 'vue';
import A from './components/A.vue';
import B from './components/B.vue';
const isShow = ref(true)
</script>

<style scoped></style>