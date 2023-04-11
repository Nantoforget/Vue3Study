<template>
    <!-- 所有汉堡的信息 -->
    <div class="meals">
        <!-- 汉堡的信息 -->
        <Meal :meal="item" v-for="item in meals.filterMeals" :key="item.id"></Meal>
        <h2 v-if="meals.filterMeals.length == 0">没有找到指定的商品</h2>
    </div>
</template>

<script setup>
    import Meal from "@/components/Meals/Meal.vue";
    import { useMealsStore } from "@/store/meals";
    const meals = useMealsStore();
    // console.log(meals.data);
</script>

<style scoped>
    .meals {
        height: calc(100vh - 121rem);
        /**background-color: #bfa;**/
        overflow: auto;
        padding-bottom: 140rem;
    }
</style>
