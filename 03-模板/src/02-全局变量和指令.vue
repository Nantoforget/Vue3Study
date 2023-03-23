<template>
    <!-- 
        可以通过app对象来向vue中添加一些全局变量
        app.config.globalProperties(在main.js中添加)
    -->
    <h1>{{ Math.random() }}</h1>
    <!-- <h2>{{ alert(123) }}</h2> -->
    <h2>{{ html }}</h2>
    <h2 v-text="html"></h2>
    <h2 v-html="html"></h2>
</template>
<script setup>
import { ref, reactive, computed } from "vue";
const html = `<h2>哈哈哈</h2>`
</script>