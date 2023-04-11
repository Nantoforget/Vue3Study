<template>
    <div class="cart-bar">
        <div class="cart-bag">
            <img src="@/assets/longzhu.png" alt="" srcset="" />
            <span class="goodNum">1</span>
        </div>
        <div class="total-amount">
            <!-- <p class="no-goods">未选购商品</p> -->
            <p class="has-goods">20</p>
        </div>
        <button class="checkout">去结算</button>
    </div>
</template>

<script setup></script>

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
    .total-amount {
        margin-left: 160rem;
    }
    /*.no-goods,*/
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
