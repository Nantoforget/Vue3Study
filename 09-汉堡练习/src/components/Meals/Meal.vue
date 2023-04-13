<template>
    <!-- 汉堡的信息 -->
    <div class="meal">
        <div class="img">
            <img :src="meal.img" alt="" />
        </div>
        <div class="info">
            <div class="desc">
                <h2 class="title">{{ meal.title }}</h2>
                <p v-if="desc" class="desc">{{ meal.desc }}</p>
            </div>
            <div class="num">
                <div v-if="price" class="price">{{ meal.price }}</div>
                <AddOrMinus :meal="props.meal"></AddOrMinus>
                <div v-if="all" class="all">{{ meal.price * meal.num }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import AddOrMinus from "@/components/UI/AddOrMinus.vue";
    import { defineProps } from "vue";
    const props = defineProps(["meal", "desc", "all", "price"]);
    const meal = props.meal || {};
</script>

<style scoped>
    .meal {
        height: 300rem;
        border-bottom: 1px #e6e6e6 solid;
        display: flex;
        align-items: center;
    }
    .img img {
        width: 300rem;
        height: 300rem;
    }
    .info h2 {
        color: #000;
        font-size: 32rem;
    }
    .info p {
        margin-top: 20rem;
        color: #313030;
    }
    .num {
        display: flex;
        margin-top: 40rem;
        margin-right: 40rem;
        justify-content: space-between;
    }
    .price {
        font-size: 30rem;
        font-weight: bold;
        margin-right: 190rem;
    }
    .price::before {
        content: "￥";
    }
    .all {
        font-size: 30rem;
        margin-left: 150rem;
    }
</style>
