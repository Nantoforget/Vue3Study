<template>
    <h3>
        <ul>
            <!-- 响应式的 -->
            <li> ComponentD--{{ students.name }} -- {{ students.age }}</li>
            <li>
                <button @click="changeAge">Click Me</button>
            </li>
            <!-- 非响应式的 ,使用storeToRefs来解构的属性是响应式的-->
            <li> ComponentD--{{ name }} -- {{ age }} -- {{ title }}</li>
            <li> ComponentD--{{ name1 }} -- {{ age1 }}</li>
            <button @click="abc">Click Me</button>
        </ul>
    </h3>
</template>

<script setup>
    //引入store
    import { useStudentStore } from "@/store/studentStore";
    import { storeToRefs } from "pinia";
    import { reactive } from "vue";
    //创建实例
    const { students, changeAge } = useStudentStore();
    /*
        store实力本身就是一个reactive对象，
            可以通过它直接访问state中的数据
        但如果直接将state中的数据解构出来，那么数据就会丧失响应性。
        如果非要使用解构，可以使用pinia中的storeToRefs
        计算属性也有这样的问题(computed)
        storeToRefs只能解构state(ref)和getters(computed)使其变成响应式的，action(function())不能
     */
    const { name, age, gender, address, title } = storeToRefs(
        useStudentStore()
    );
</script>

<style scoped></style>
