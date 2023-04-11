<template>
    <div class="filter">
        <input v-model="meals.keyword" class="filter-input" placeholder="请输入关键字" type="text" name="" id="" />
        <i class="ri-search-2-line"></i>
    </div>
</template>

<script setup>
    import { useMealsStore } from "../../store/meals";
    const meals = useMealsStore();
</script>

<style scoped>
    .filter {
        /**height: 100rem;**/
        border-bottom: 1rem solid #e6e6e6;
        padding: 20rem 40rem;
        position: relative;
        display: flex;
        align-items: center;
    }
    .filter-input {
        height: 80rem;
        width: 100%;
        background-color: rgb(242, 242, 242);
        border: none;
        border-radius: 40rem;
        outline: none;
        padding: 0 40rem 0 60rem;
    }
    .filter i {
        color: rgb(184, 184, 184);
        font-size: 30rem;
        position: absolute;
        left: 50rem;
    }
</style>
