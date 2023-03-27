<template>
    <form>
        <div> 姓名：<input type="text" v-model="stu.newStu.name" /> </div>
        <div>
            年龄：<input type="number" min="1" v-model="stu.newStu.age" />
        </div>
        <div>
            性别： 男<input
                type="radio"
                value="男"
                v-model="stu.newStu.gender" />
            女<input value="女" type="radio" v-model="stu.newStu.gender" />
        </div>
        <div> 地址：<input type="text" v-model="stu.newStu.address" /> </div>
        <button @click.prevent="addStu">提交</button>
    </form>
</template>

<script setup>
    import { useStuStore } from "../store/stuStore";
    const stu = useStuStore();
    const addStu = () => {
        stu.addStu({ ...stu.newStu });
        stu.newStu.name = "";
        stu.newStu.age = 18;
        stu.newStu.gender = "男";
        stu.newStu.address = "";
    };
</script>

<style scoped></style>
