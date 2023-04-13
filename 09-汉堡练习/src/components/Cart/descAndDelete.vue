<template>
    <div class="title">
        <h1 class="cart">餐品详情</h1>
        <span class="clear-cart" @click="showConfirmDelete()">
            <i class="ri-delete-bin-6-line"></i>
            清空购物车
        </span>
        <ConfirmDelete @noMask="noMask" :isShow="showGoods" @clearCart="clearCart"></ConfirmDelete>
    </div>
</template>

<script setup>
    import { useMealsStore } from "@/store/meals";
    import ConfirmDelete from "@/components/Cart/ConfirmDelete.vue";
    import { ref } from "vue";
    let showGoods = ref(false);
    const meals = useMealsStore();
    const showConfirmDelete = () => {
        showGoods.value = true;
    };
    const noMask = () => {
        showGoods.value = false;
    };
    // 确认删除
    const clearCart = () => {
        showGoods.value = false;
        meals.clear();
    };
</script>

<style scoped>
    .title {
        display: flex;
        justify-content: space-between;
        /*position: fixed;*/
        width: 100%;
        background: #fff;
        border-radius: 40rem 40rem 0 0;
    }
    .cart,
    .clear-cart {
        margin: 0 50rem;
        font-size: 30rem;
        padding-top: 20rem;
    }
    i {
        margin-right: 10rem;
    }
</style>
