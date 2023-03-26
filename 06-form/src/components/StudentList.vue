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
        <tbody>
            <tr v-for="(stu, index) in students" :key="stu.id">
                <td>{{ stu.id }}</td>
                <td>{{ stu.name }}</td>
                <td>{{ stu.age }}</td>
                <td>{{ stu.gender }}</td>
                <td>{{ stu.address }}</td>
                <td><a @click.prevent="deleteDate(index)" href="#">删除</a></td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
// 通过defineProps定义的属性在$attrs中就不存在了
//定义props属性，接受父组件传递的数据
const props = defineProps(["stu"])
const students = props.stu;
//删除
const deleteDate = (index) => {
    // const a = students.find((item) => {
    //     return item.id == id
    // })
    if (confirm("请确认删除")) {
        students.splice(index, 1)
    }

}
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

th,
td {
    border: 2px solid red;
    text-align: center;
}

a {
    text-decoration: none;
}
</style>