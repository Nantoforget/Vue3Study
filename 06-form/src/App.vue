<template>
    <!-- 自定义事件@del-stu
            在子组件中先用$emit("事件名")来分发事件，
            父组件中使用@事件名="父组件事件"来进行传递
    -->
    <StudentList
        :stu="students"
        :fn="delStudentByIndex"
        @del-stu="delStudentByIndex"></StudentList>
    <hr />
    <StudentForm @add-stu="addStudent"></StudentForm>
</template>

<script setup>
    import { ref, reactive, provide } from "vue";
    import StudentList from "./components/StudentList.vue";
    import StudentForm from "./components/StudentForm.vue";
    /* 
        依赖注入
            -通过依赖注入，可以跨越多层组件向其他的组件传递数据
            -步骤：
                1.设置依赖(provide) provide(name,value)
                2.注入数据(inject) const value = inject(name,value)
     */
    provide("name", "孙悟空");
    //学生信息数组
    const students = reactive([
        {
            id: 1,
            name: "孙悟空",
            age: 18,
            gender: "男",
            address: "花果山",
        },
        {
            id: 2,
            name: "猪八戒",
            age: 28,
            gender: "男",
            address: "高老庄",
        },
        {
            id: 3,
            name: "沙和尚",
            age: 38,
            gender: "男",
            address: "流沙河",
        },
        {
            id: 4,
            name: "唐僧",
            age: 16,
            gender: "男",
            address: "女儿国",
        },
    ]);

    //添加学生的方法
    const addStudent = (newStu) => {
        console.log(newStu);
        newStu.id = students.at(-1) ? students.at(-1).id + 1 : 1;
        students.push(newStu);
    };
    //删除学生的方法
    const delStudentByIndex = (index) => {
        if (confirm("请确认删除")) {
            students.splice(index, 1);
        }
    };
    provide("student", {
        students,
        addStudent,
        delStudentByIndex,
    });
</script>

<style scoped></style>
