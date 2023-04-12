<template>
    <!-- 汉堡的信息 -->
    <div class="meal">
        <div class="img">
            <img :src="meal.img" :alt="meal.title" srcset="" />
        </div>
        <div class="info">
            <div class="desc">
                <h2 class="title">{{ meal.title }}</h2>
                <p class="desc">{{ meal.desc }}</p>
            </div>
            <div class="num">
                <div class="price">{{ meal.price }}</div>
                <AddOrMinus @goodsMinusNum="goodsMinusNum" @goodsAddNum="goodsAddNum"></AddOrMinus>
            </div>
        </div>
    </div>
</template>

<script setup>
    import AddOrMinus from "@/components/UI/AddOrMinus.vue";
    import { defineProps } from "vue";
    import {useMealsStore} from "@/store/meals";
    const meals = useMealsStore()
    const props = defineProps(["meal"]);
    const meal = props.meal;
    //商品数量的自定义函数
    const goodsAddNum=(count)=>{
        meals.addGoods(meal,count);
    }
    const goodsMinusNum = (count)=>{
        meals.minusGoods(meal,count)
    }
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
    }
    .price {
        font-size: 30rem;
        font-weight: bold;
        flex: 1;
    }
    .price::before {
        content: "￥";
    }
</style>
