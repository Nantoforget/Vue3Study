<template>
    <tbody>
        <tr v-for="(stu, index) of students.stu_ARR" :key="stu.id">
            <td>{{ stu.id }}</td>
            <td>{{ stu.name }}</td>
            <td>{{ stu.age }}</td>
            <td>{{ stu.gender }}</td>
            <td>{{ stu.address }}</td>
            <td>
                <a @click="students.delStu(index)" href="#">删除</a>
            </td>
        </tr>
    </tbody>
</template>

<script setup>
    import { useStuStore } from "@/store/stuStore";
    const students = useStuStore();
</script>

<style scoped>
    td {
        text-align: center;
        border: 2px red solid;
    }
    a {
        text-decoration: none;
    }
</style>
