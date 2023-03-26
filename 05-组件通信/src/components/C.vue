<template>
    <h3>我是组件C</h3>
    <!-- 一个一个设置 -->
    <h4 :class="$attrs.class" :style="$attrs.style">我是h4</h4>
    <!-- 全部设置 -->
    <h4 :="$attrs">我是h4</h4>
    <!-- 
        在模板中可以直接通过$attrs来访问透传过来的属性
            可以手动指定透传过来的属性要添加到哪些元素中
    -->
    {{ $attrs }}
</template>
<script>
export default {
    inheritAttrs: false //关闭自动透传(手动透传没影响)
}
</script>
<script setup>
import { useAttrs } from 'vue';
/* 
    在script中，可以通过userAttrs()来获取头传过来的属性
*/
const attrs = useAttrs()
console.log(attrs);
</script>

<style scoped></style>