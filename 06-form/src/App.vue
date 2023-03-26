<template>
    <h1>哈哈哈</h1>
    <form @submit.prevent="submitHandler">
        <!-- 
            利用v-bind:value和v-on:input实现了双向绑定
            v-model的原理就是v-bind:value和v-on:input
        -->
        <!-- 
            v-model修饰符
                .lazy 使用change代替input来处理数据
                .trim 去除前后的空格
                .number 将数据转换为数值(合法的数值)
        -->
        <input type="text" :value="text" @input="(event) => (text = event.target.value)" />
        <input type="text" v-model="text" />
        <div>
            是否:<input type="checkbox" v-model="bool" true-value="是" false-value="否">
        </div>
        <button>提交 </button>
    </form>
</template>

<script setup>
import { ref } from "vue"
let text = ref("");
let bool = ref(false)
const submitHandler = () => {
    console.log(text.value);
};
</script>

<style scoped></style>
