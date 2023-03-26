<template>
    <h1>App组件</h1>
    <!-- 
        希望在父组件中指定子组件中的内容
            -我们可以通过插槽(slot)来实现
        -父组件
            <MyButton>插槽的入口</MyButton>
        -子组件
            <button>
                <slot></slot>插槽的出口
            </button>
        通过插槽引入组件，位于父组件的作用域中

    -->
    <MyButton>哈哈哈哈</MyButton>
    <MyWrapper>
        <!-- 具名插槽 -->
        <template v-slot:aa>哈哈哈</template>
        <template #bb>嘿嘿嘿</template>
    </MyWrapper>
</template>

<script setup>
import MyButton from "./components/MyButton.vue";
import MyWrapper from "./components/MyWrapper.vue"
import { ref } from 'vue';


</script>

<style scoped></style>