<template>
    <div class="item">
        <div class="img">
            <div class="imgP">
                <div class="num">{{ props.item.rate }}</div>
                <img :src="props.item.img">
            </div>
        </div>
        <div class="info">
            <div class="name">{{ props.item.name }}</div>
            <div class="heat">
                <div class="heatP">{{ props.item.hot }}热度</div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(["item"])
</script>

<style scoped>
.item {
    margin: 15px 20px;
    display: flex;
}

.img {
    height: 150px;
}

.imgP {
    width: 150px;
    height: 150px;
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
    background-color: orange;
    border-radius: 0 0 10px 0;
}

.imgP img {
    width: 150px;
    height: 150px;
}

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

.info .heat .heatP {
    padding-left: 10px;
    border-radius: 50px;
    width: 100%;
    background-image: linear-gradient(90deg, rgb(186, 3, 53) 50%, rgb(68, 34, 12));
    white-space: nowrap;
}
</style>
