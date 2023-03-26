<template>
    <div class="box1" @click.stop="handler('box1')">
        <div class="box2" @click.stop="handler('box2')">
            <div class="box3" @click.stop="handler('box3')"></div>
        </div>
    </div>
</template>

<script setup>
/* 
    时间修饰符：
        .stop停止时间的传播
        .capture在捕获阶段触发事件
        .prevent取消默认行为
        .self只有事件由自身触发时有效
        .once绑定一次性的事件
        .passive主要提升滚动事件的性能
 */
const handler = (box) => {
    alert(box);
}
</script>

<style scoped>
.box1 {
    width: 300px;
    height: 300px;
    background-color: blueviolet;
}

.box2 {
    width: 200px;
    height: 200px;
    background-color: blue;
}

.box3 {
    width: 100px;
    height: 100px;
    background-color: aqua;
}
</style>