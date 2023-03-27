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
            <button @click="name = '孙大圣'">Click Me</button>
            <button @click="abc">Patch修改</button>
        </ul>
    </h3>
</template>

<script setup>
    //引入store
    import { useStudentStore } from "@/store/studentStore";
    import { storeToRefs } from "pinia";
    import { reactive } from "vue";
    //创建实例
    const stuStore = useStudentStore();
    const { students, changeAge } = useStudentStore();
    /*
        store实力本身就是一个reactive对象，
            可以通过它直接访问state中的数据
        但如果直接将state中的数据解构出来，那么数据就会丧失响应性。
        如果非要使用解构，可以使用pinia中的storeToRefs
        计算属性也有这样的问题(computed)
        storeToRefs只能解构state(ref)和getters(computed)使其变成响应式的，action(function())不能

        state的修改:
            1.直接修改
            2.通过$patch传对象的方式
            3.通过$patch传函数的方式
            4.stuStore.$reset()重置，将数据恢复原始状态
    */
    const { name, age, gender, address, title } = storeToRefs(
        useStudentStore()
    );
    const abc = () => {
        // stuStore.$patch({
        //     name: "哈哈哈",
        //     age: 789,
        // });
        //上面的等价于
        stuStore.$state = { name: "哈哈哈", age: 789 };
        //函数的方式
        // stuStore.$patch((state) => {});
    };
    /* 
        store的订阅
            - 当store中的state发生变化时，做一些相应的操作
            - store.$subscribe(函数,配置对象{ detached: true} :决定组件没有被挂载时是否触发订阅(true:是，false:否))
                函数有两个参数(mutation,state)
                    mutation
                        表示修改的信息
                    state
                        是当前修改的数据对象
                        在使用订阅时，不要在回调函数中直接修改state
    */
    stuStore.$subscribe(
        (mutation, state) => {
            console.log(100);
        },
        { detached: true }
    );
</script>

<style scoped></style>
