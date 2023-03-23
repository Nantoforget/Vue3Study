<template>
    <div :class="$style.div">哈哈哈哈</div>
</template>
<script setup>
import { ref, reactive, computed } from "vue";
</script>
<!-- 
    可以直接通过style标签来编写样式
    加上scoped样式就成为了局部样式
    如何实现的？
        - 当我们在组件中使用scoped样式时，
            vue会自动为组件中的所有元素添加一个随机的元素
            形如：data-v-7a7a37b1,
            生成后，所用的选择器后面都会添加一个[data-v-7a7a37b1](属性选择器)
            h1 --- >h1[data-v-7a7a37b1]
        - 注意：
            - 随机生成的属性，除了会添加到当前组件内的所有元素上，
            也会添加到当前组件引入的其他组件的根元素上，这样设计是为了，可以通过父组件来为子组件设置一些样式
    :deep()深度选择器
    :global()全局选择器
-->
<!-- <style scoped>
h1 {
    color: red
}
</style> -->
<!--
    css 模块
        - 自动地对模块中的类名进行hash化来确保类名的唯一性
            再写标签中写类名时，要使用:class="$style.div"
            也可以通过module的属性值(module="app")来指定变量名  :class="$app.div"
-->
<style module>
.div {
    color: red
}
</style>