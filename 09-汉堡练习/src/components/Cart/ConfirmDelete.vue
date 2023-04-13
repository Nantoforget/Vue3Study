<template>
    <Mask @noMask="emits('noMask')">
        <div class="del">
            <div class="com">确定清空购物车吗？</div>
            <div class="btn">
                <button class="no" @click="emits('noMask')">取消</button>
                <button class="ok" @click="emits('clearCart')">确认</button>
            </div>
        </div>
    </Mask>
</template>

<script setup>
    import Mask from "@/components/UI/Mask.vue";
    const emits = defineEmits(["noMask", "clearCart"]);
</script>

<style scoped>
    .del {
        background: #fff;
        width: 90%;
        margin: auto;
        height: 400rem;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border-radius: 40rem;
    }
    .com {
        width: 100%;
        height: 280rem;
        text-align: center;
        line-height: 300rem;
        font-size: 40rem;
    }
    .btn {
        width: 100%;
        height: 80rem;
        /*background: red;*/
        display: flex;
        justify-content: space-around;
    }
    .no,
    .ok {
        width: 40%;
        border-radius: 50rem;
        border: none;
        font-size: 32rem;
    }
    .ok {
        background: rgb(248, 188, 0);
    }
    .no {
        border: 1rem #000 solid;
        background: #fff;
    }
</style>
