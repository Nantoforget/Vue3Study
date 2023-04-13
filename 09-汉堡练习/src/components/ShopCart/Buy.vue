<template>
    <div class="buy">
        <h1><i class="ri-close-fill" @click="$emit('close')"></i></h1>
        <div class="userGoods">
            <div class="header">餐品详情</div>
            <Meals :all="true" :price="false" :decs="false" :meals="meals.carArr"></Meals>
            <div class="summation">合计￥{{ meals.foodsPrice }}</div>
        </div>
    </div>
</template>

<script setup>
    import Meals from "@/components/Meals/Meals.vue";
    import { useMealsStore } from "@/store/meals";
    const meals = useMealsStore();
</script>

<style scoped>
    .buy {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgb(240, 240, 240);
    }
    h1 {
        font-size: 38rem;
        margin: 15rem 0 0 15rem;
    }
    .userGoods {
        width: 95%;
        margin: auto;
    }
    .header {
        height: 90rem;
        font-size: 36rem;
        font-weight: bold;
        padding: 20rem 0 0 20rem;
        background: #fff;
        border-radius: 40rem 40rem 0 0;
        border-bottom: 1rem solid #eee;
    }
    .meals {
        height: auto;
        max-height: calc(280rem * 4);
        padding-bottom: 20rem;
        border-radius: 0 0 30rem 30rem;
        background: #fff;
    }
    .meal {
        border: none;
    }
    .summation {
        height: 150rem;
        font-size: 36rem;
        font-weight: bold;
        line-height: 150rem;
        text-align: right;
        padding-right: 30rem;
        border-radius: 30rem 30rem 30rem 30rem;
        background: #fff;
        border-top: 1rem solid #e6e6e6;
    }
</style>
