<template>
    <div class="counter">
        <template v-if="meal.num > 0">
            <button class="minus" @click="meals.minusGoods(props.meal)">
                <i class="ri-subtract-line"></i>
            </button>
            <span class="goodNum">{{ meal.num }}</span>
        </template>
        <button class="add" @click="meals.addGoods(props.meal)">
            <i class="ri-add-fill"></i>
        </button>
    </div>
</template>

<script setup>
    import { useMealsStore } from "@/store/meals";
    const meals = useMealsStore();
    const props = defineProps(["meal"]);
    const meal = props.meal || {};
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
