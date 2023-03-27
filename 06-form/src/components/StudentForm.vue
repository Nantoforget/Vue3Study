<template>
    <form>
        <div> 姓名<input type="text" name="name" v-model="newStu.name" /></div>
        <div>
            年龄<input
                type="number"
                name="age"
                min="1"
                max="120"
                v-model="newStu.age" />
        </div>
        <div>
            性别
            <input
                type="radio"
                name="gender"
                value="男"
                v-model="newStu.gender" />男
            <input
                type="radio"
                name="gender"
                value="女"
                v-model="newStu.gender" />女
        </div>
        <div>
            住址
            <input type="text" name="address" v-model="newStu.address" />
        </div>
        <button @click.prevent="addNewStu">添加</button>
    </form>
</template>

<script setup>
    import { reactive } from "vue";
    //props接受
    // const props = defineProps(["newStu"]);
    //自定义事件
    const emits = defineEmits(["addStu"]);
    //保存新添加的学生信息
    const newStu = reactive({
        name: "",
        age: 18,
        gender: "男",
        address: "",
    });
    //点击添加的回调
    const addNewStu = () => {
        // console.log(newStu);
        // emits("addStu", Object.assign({}, newStu)); //浅复制
        emits("addStu", { ...newStu }); //解构传值
        newStu.name = "";
        newStu.age = 18;
        newStu.gender = "男";
        newStu.address = "";
    };
</script>

<style scoped></style>
