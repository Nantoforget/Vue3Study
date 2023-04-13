<template>
    <MealsFilter></MealsFilter>
    <Meals :all="false" :price="true" :desc="true" :meals="meals.filterMeals"></Meals>
    <ShopCart></ShopCart>
</template>

<script setup>
    import Meals from "@/components/Meals/Meals.vue";
    import MealsFilter from "@/components/MealsFilter/MealsFilter.vue";
    import ShopCart from "@/components/ShopCart/ShopCart.vue";
    import { useMealsStore } from "@/store/meals";
    const meals = useMealsStore();
</script>

<style scoped></style>
