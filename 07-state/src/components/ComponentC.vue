<template>
    <h4>
        <ul>
            <li>
                ComponentC ---
                {{ count }} ---
                <button @click="changeCount">Click Me</button>
            </li>
        </ul>
    </h4>
</template>

<script setup>
    import { ref, inject } from "vue";
    //依赖注入
    //注入数据
    const { count, changeCount } = inject("count");
</script>

<style scoped></style>
