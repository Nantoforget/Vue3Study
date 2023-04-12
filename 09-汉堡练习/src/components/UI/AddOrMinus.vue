<template>
    <div class="counter">
        <template v-if="count > 0">
            <button class="minus" @click="minusCount">
                <i class="ri-subtract-line"></i>
            </button>
            <span class="goodNum">{{ count }}</span>
        </template>
        <button class="add" @click="addCount">
            <i class="ri-add-fill"></i>
        </button>
    </div>
</template>

<script setup>
    import { defineEmits } from "vue";
    const emits = defineEmits();
    import { ref } from "vue";
    let count = ref(0);
    const addCount = () => {
        count.value++;
        emits("goodsAddNum", count.value);
    };
    const minusCount = () => {
        count.value--;
        emits("goodsMinusNum");
    };
</script>

<style scoped>
    .counter {
        font-size: 30rem;
        display: flex;
        justify-content: center;
    }
    .goodNum {
        margin: 0 20rem;
        text-align: center;
    }
    .add,
    .minus {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 36rem;
        height: 36rem;
        border: none;
        border-radius: 50%;
        font-weight: bold;
        background-color: rgb(234, 178, 0);
    }
    .minus {
        background: #fff;
    }
</style>
