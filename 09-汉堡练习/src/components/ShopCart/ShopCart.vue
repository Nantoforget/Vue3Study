<template>
    <div class="cart-bar">
        <div class="cart-bag" v-if="!buyShow">
            <img src="@/assets/longzhu.png" alt="" srcset="" />
            <span v-if="meals.foodsNum > 0" class="goodNum">{{ meals.foodsNum }} </span>
        </div>
        <div class="total" v-else><span>合计:</span></div>
        <div class="total-amount" @click="showGoodsDetail()">
            <p v-if="meals.foodsNum == 0" class="no-goods">未选购商品</p>
            <p v-else class="has-goods">{{ meals.foodsPrice }}</p>
        </div>
        <button v-if="!buyShow" class="checkout" @click="closeAccount">去结算</button>
        <button v-else class="checkout">去支付</button>
    </div>
    <GoodsDetail @noMask="noMask" :isShow="showGoods"></GoodsDetail>
    <Buy @close="close" v-if="buyShow"></Buy>
</template>

<script setup>
    import { useMealsStore } from "@/store/meals";
    import { ref, watch } from "vue";
    import GoodsDetail from "@/components/Cart/GoodsDetail.vue";
    import Buy from "@/components/ShopCart/Buy.vue";
    const meals = useMealsStore();
    let showGoods = ref(false);
    const showGoodsDetail = () => {
        if (meals.foodsNum == 0) return;
        showGoods.value = !showGoods.value;
    };
    const noMask = () => {
        showGoods.value = false;
    };
    watch(
        () => meals.foodsNum,
        () => {
            if (meals.foodsNum == 0) {
                showGoods.value = false;
            }
        }
    );
    let buyShow = ref(false);
    const closeAccount = () => {
        buyShow.value = true;
    };
    const close = () => {
        buyShow.value = false;
    };
</script>

<style scoped>
    .cart-bar {
        width: 710rem;
        height: 100rem;
        position: fixed;
        background: rgb(58, 58, 58);
        bottom: 20rem;
        left: 0;
        right: 0;
        margin: 0 auto;
        border-radius: 60rem;
        z-index: 99;
    }
    .cart-bag img {
        width: 100rem;
        height: 100rem;
        position: absolute;
        bottom: 0;
    }
    .goodNum {
        position: absolute;
        width: 50rem;
        height: 50rem;
        background: red;
        border-radius: 50%;
        left: 70rem;
        top: -5rem;
        color: #fff;
        font-weight: bold;
        text-align: center;
        line-height: 52rem;
    }
    .total {
        position: absolute;
        width: 100rem;
        height: 50rem;
        left: 70rem;
        top: 23rem;
        color: #fff;
        font-size: 36rem;
        font-weight: bold;
        text-align: center;
        line-height: 52rem;
    }
    .total-amount {
        margin-left: 180rem;
    }
    .no-goods,
    .has-goods {
        line-height: 100rem;
        color: rgb(148, 148, 148);
        font-size: 38rem;
    }
    .has-goods {
        color: #fff;
    }
    .has-goods::before {
        content: "￥";
        font-size: 26rem;
        font-weight: bold;
    }
    .checkout {
        position: absolute;
        top: 0;
        right: 0;
        width: 200rem;
        height: 100%;
        border-radius: 50rem;
        font-size: 30rem;
        border: none;
        background-color: rgb(248, 188, 0);
    }
</style>
