<template>
    <h1>你好{{ message }}</h1>
    <MyButton></MyButton>
    <MyButton></MyButton>
    <MyButton></MyButton>
</template>
<script>
import MyButton from './components/MyButton.vue';
export default {
    data() {
        return {
            message: "嘿嘿嘿"
        }
    },
    components: {
        MyButton
    }
}
</script>