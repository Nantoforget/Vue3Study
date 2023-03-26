<template>
    <div class="img">
        <div class="imgP">
            <div class="num">{{ props.rate }}</div>
            <img :src=props.img>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
const props = defineProps(["img", "rate"]);
//颜色
const color = computed(() => {
    if (props.rate === 1) {
        return "red"
    } else if (props.rate === 2) {
        return "blue"
    } else {
        return "black"
    }
})

</script>

<style scoped>
.img {
    height: 150px;
    margin: 15px 20px 0px;
    display: flex;
    width: 150px;
}

.imgP {
    width: 100%;
    height: 100%;
    background: #fff;
    border-radius: 20px;
    position: relative;
    overflow: hidden;
}


.num {
    width: 50px;
    height: 50px;
    text-align: center;
    font-size: 30px;
    line-height: 50px;
    color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    background-color: v-bind(color);
    border-radius: 0 0 10px 0;
}

.imgP img {
    width: 100%;
    height: 100%;
}
</style>