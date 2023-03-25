<template>
  <h1>我是根组件App</h1>
  <son :item="count" :obj="obj"></son>
  <button @click="obj.count++">Click Me</button>
</template>

<script setup>
import son from './components/son.vue';
import { ref } from 'vue';
const count = ref(0)
const obj = ref({
  count: 0
})
</script>

<style scoped></style>