<template>
    <h2> Root根组件 </h2>
    <ComponentA></ComponentA>
    <ComponentB></ComponentB>
</template>

<script setup>
    import { ref, provide } from "vue";
    import ComponentA from "./ComponentA.vue";
    import ComponentB from "./ComponentB.vue";
    let count = ref(0);
    const changeCount = () => {
        count.value++;
    };
    //依赖注入
    //设置依赖
    provide("count", {
        count,
        changeCount,
    });
</script>

<style scoped></style>
