<template>
    <!-- 选项卡的外部容器 -->
    <div class="box">
        <!-- 头部选项卡 -->
        <header class="header">
            <div class="hot" :class="{ active: current === 0 }" @click="current = 0">热门球员</div>
            <div class="hot" :class="{ active: current === 1 }" @click="current = 1">热门球队</div>
        </header>
        <!-- 内容 -->
        <div class="main">
            <div v-if="current === 0">
                <player :item="players[0]"></player>
                <player :item="players[1]"></player>
                <player :item="players[2]"></player>
            </div>
            <div v-else>
                <team :item="teams[0]"></team>
                <team :item="teams[1]"></team>
                <team :item="teams[2]"></team>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, reactive } from "vue";
import player from "./components/player.vue";
import team from "./components/team.vue";
/* 
    使用props
        -现在子组件中定义props(defineProps())
 */
const players = reactive([
    {
        name: "梅西",
        img: "/images/messi.png",
        rate: 1,
        hot: 433760,
    },
    {
        name: "C罗",
        img: "/images/ronaldo.png",
        rate: 2,
        hot: 433760,
    },
    {
        name: "内马尔",
        img: "/images/neymar.png",
        rate: 3,
        hot: 433760,
    }
]);
const teams = reactive([
    {
        name: "法国",
        img: "/images/法国.jpg",
        rate: 1,
        hot: 433760,
    },
    {
        name: "巴西",
        img: "/images/巴西.jpg",
        rate: 2,
        hot: 433760,
    },
    {
        name: "荷兰",
        img: "/images/荷兰.jpg",
        rate: 3,
        hot: 433760,
    }
])
let current = ref(0)
</script>
<style scoped>
.box {
    width: 600px;
    background-color: rgb(45, 85, 212);
    padding: 15px;
    box-sizing: border-box;
}

.box .header {
    display: flex;
    background-color: blueviolet;
    height: 50px;
    margin: 0 10px;
    font-size: 24px;
    border-radius: 20px;
    overflow: hidden;
}

.header .hot {
    background-color: #fff;
    flex: 1;
    line-height: 50px;
    text-align: center;
    color: #000;
    /* 鼠标移入到就变小手 */
    cursor: pointer;
}

.header .hot:not(.active):hover {
    color: blue
}

.header .active {
    background-color: red;
    color: #fff;
}
</style>