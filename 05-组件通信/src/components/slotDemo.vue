<template>
    <div>
        slotDemo组件
        <h1>
            <!-- 
                可以在slot中指定一个默认内容，默认会在组件中没有内容是显示
                没有name属性的就是默认插槽
            -->
            <slot>默认的内容</slot>
            <slot name="aa"></slot>
            <div>
                <slot name="bb" :gender="gender"></slot>
            </div>
        </h1>
    </div>
</template>

<script setup>
const gender = "男"
</script>

<style scoped></style>