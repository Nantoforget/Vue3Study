<template>
    <div class="info">
        <div class="name">{{ props.name }}</div>
        <div class="heat">
            <div class="heat">{{ props.hot }}热度</div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps(["name", "hot", "maxHot"])
const width = computed(() => {
    return props.hot / props.maxHot * 100 + "%"
})
</script>

<style scoped>
.info {
    margin: 30px;
}

.info .name {
    color: #fff;
    font-size: 28px;
    margin-bottom: 20px;
}

.info .heat {
    color: #fff;
    font-size: 26px;
    width: 320px;
    border-radius: 50px;
    background-color: rgb(4, 37, 104);
}

.info .heat .heat {
    padding-left: 10px;
    border-radius: 50px;
    width: v-bind(width);
    background-image: linear-gradient(90deg, rgb(186, 3, 53) 50%, rgb(68, 34, 12));
    white-space: nowrap;
}
</style>