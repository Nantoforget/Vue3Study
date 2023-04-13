<template>
    <Mask>
        <div class="goods">
            <DescAndDelete></DescAndDelete>
            <Meals :decs="false" :meals="meals.carArr"></Meals>
        </div>
    </Mask>
</template>

<script setup>
    import { defineProps } from "vue";
    import Mask from "@/components/UI/Mask.vue";
    import Meals from "@/components/Meals/Meals.vue";
    import DescAndDelete from "@/components/Cart/descAndDelete.vue";
    import { useMealsStore } from "@/store/meals";
    const props = defineProps(["good"]);
    const meals = useMealsStore();
</script>

<style scoped>
    .goods {
        /*max-height: 70%;*/
        position: absolute;
        bottom: 0;
        width: 100%;
        background: #fff;
        border-radius: 40rem 40rem 0 0;
        overflow: auto;
        z-index: 999;
    }
    .meals {
        height: auto;
        max-height: calc(280rem * 4);
    }
</style>
