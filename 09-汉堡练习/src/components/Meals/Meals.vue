<template>
    <!-- 所有汉堡的信息 -->
    <div class="meals">
        <!-- 汉堡的信息 -->
        <Meal :desc="$attrs.desc" :meal="item" v-for="item in props.meals" :key="item.id"></Meal>
        <h2 v-if="!props.meals || props.meals.length == 0">没有找到指定的商品</h2>
    </div>
</template>

<script setup>
    import Meal from "@/components/Meals/Meal.vue";
    const props = defineProps(["meals"]);
</script>

<style scoped>
    .meals {
        height: calc(100vh - 121rem);
        overflow: auto;
        padding-bottom: 120rem;
    }
</style>
