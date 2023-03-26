<template>
    <h1>App组件</h1>
    <!-- 直接写在组件中的内容是默认插槽的内容，只会在默认插槽中出现 -->
    <!-- 
        等价于
        <slot-demo>
            <template #default>哈哈哈哈</template>
        </slot-demo>
    -->
    <slot-demo>
        哈哈哈哈
        <template v-slot:aa>AA</template>
        <template #bb="slotProps">
            <A :name="slotProps.gender"></A>
        </template>
    </slot-demo>
</template>

<script setup>
import SlotDemo from "./components/slotDemo.vue"
import A from "./components/A.vue"
</script>

<style scoped></style>