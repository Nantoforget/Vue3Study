<template>
    <table>
        <caption>学生列表</caption>
        <thead>
            <tr>
                <th>学号</th>
                <th>姓名</th>
                <th>年龄</th>
                <th>性别</th>
                <th>住址</th>
                <th>操作</th>
            </tr>
        </thead>
        <StudentItem></StudentItem>
    </table>
</template>

<script setup>
    import { inject } from "vue";
    import StudentItem from "./StudentItem.vue";
    const name = inject("name", "默认值");
    console.log(name);
    // 通过defineProps定义的属性在$attrs中就不存在了
    //定义props属性，接受父组件传递的数据
    const props = defineProps(["stu", "fn"]);
    const students = props.stu;
    //自定义事件
    const emits = defineEmits(["delStu"]);
    //删除
    const deleteDate = (index) => {
        /* if (confirm("请确认删除")) {
        students.splice(index, 1)
    } */
        /* 利用props
        props.fn(index); */
        /* 自定义事件 */
        emits("delStu", index);
    };
</script>

<style scoped>
    table {
        width: 50%;
        border-collapse: collapse;
        margin: 0 auto;
        font-size: 28px;
    }

    caption {
        font-size: 30px;
        font-weight: bold;
    }

    th {
        border: 2px solid red;
        text-align: center;
    }
</style>
