<template>
    <div>
        <h2>我是子组件</h2>
        <h3>{{ props.item }}</h3>
        <h3>{{ props.obj.count }}</h3>
        <!-- 修改的样例 -->
        <button @click="props.obj.count++">子组件按钮</button>
        <hr>
    </div>
</template>

<script setup>

/* 
    父组件可以通过props来向子组件传递数据
    现在子组件中定义props(利用defineProps())
    注意：父组件传递给子组件的props都是只读的，无法修改
        即使可以修改，也要尽量不要去修改
    属性名
        -定义属性名时需要使用驼峰法
 */
const props = defineProps(["item", "obj"])
</script>

<style scoped>
div {
    color: aqua;
}
</style>