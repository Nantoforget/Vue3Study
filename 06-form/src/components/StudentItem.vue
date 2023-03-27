<template>
    <tbody>
        <tr v-for="(stu, index) in students" :key="stu.id">
            <td>{{ stu.id }}</td>
            <td>{{ stu.name }}</td>
            <td>{{ stu.age }}</td>
            <td>{{ stu.gender }}</td>
            <td>{{ stu.address }}</td>
            <!-- <td><a @click.prevent="deleteDate(index)" href="#">删除</a></td> -->
            <!-- 在模板中可以通过$emit()来触发自定义事件 -->
            <td>
                <!-- <a @click.prevent="emits('delStu', index)" href="#">删除</a> -->
                <a @click.prevent="delStudentByIndex(index)" href="#">删除</a>
            </td>
        </tr>
    </tbody>
</template>

<script setup>
    import { inject } from "vue";
    const { students, delStudentByIndex } = inject("student");
</script>

<style scoped>
    td {
        border: 2px solid red;
        text-align: center;
    }

    a {
        text-decoration: none;
    }
</style>
