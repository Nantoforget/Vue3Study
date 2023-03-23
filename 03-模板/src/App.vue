<template>
    <img :src="imgPath">
    <button>Click Me</button>
    <div v-bind="attrs"></div>
    <input type="text" :disabled="disabled">
</template>
<script setup>
import { ref, reactive, computed } from "vue";
//空串也表示一个真值
const disabled = '';
const imgPath = ref("/images/jia.png");
const attrs = {
    id: "box",
    class: "c"
};
</script>