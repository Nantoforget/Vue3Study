<template>
    <div class="item1">
        <div class="img">
            <div class="imgP">
                <div class="num">1</div>
                <img src="/images/messi.png">
            </div>
        </div>
        <div class="info">
            <div class="name">梅西</div>
            <div class="heat">
                <div class="heatM">433760热度</div>
            </div>
        </div>
    </div>
    <div class="item1">
        <div class="img">
            <div class="imgP">
                <div class="num">2</div>
                <img src="/images/ronaldo.png">
            </div>
        </div>
        <div class="info">
            <div class="name">C罗</div>
            <div class="heat">
                <div class="heatC">433760热度</div>
            </div>
        </div>
    </div>
    <div class="item1">
        <div class="img">
            <div class="imgP">
                <div class="num">3</div>
                <img src="/images/neymar.png">
            </div>
        </div>
        <div class="info">
            <div class="name">内马尔</div>
            <div class="heat">
                <div class="heatN">433760热度</div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.item1 {
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

.info .heat .heatM {
    padding-left: 10px;
    border-radius: 50px;
    width: 100%;
    background-image: linear-gradient(90deg, rgb(186, 3, 53) 50%, rgb(68, 34, 12));
    white-space: nowrap;
}

.info .heat .heatC {
    padding-left: 10px;
    border-radius: 50px;
    width: 50%;
    background-image: linear-gradient(90deg, rgb(186, 3, 53) 50%, rgb(68, 34, 12));
    white-space: nowrap;
}

.info .heat .heatN {
    padding-left: 10px;
    border-radius: 50px;
    width: 50%;
    background-image: linear-gradient(90deg, rgb(186, 3, 53) 50%, rgb(68, 34, 12));
    white-space: nowrap;
}
</style>
