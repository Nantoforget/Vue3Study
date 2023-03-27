<template>
    <h3>
        ComponentA --- {{ countStore2.count }} ---{{ countStore2.double }} ---{{
            countStore2.name
        }}
        <button @click="countStore2.changeCount">Click Me</button>
    </h3>
</template>

<script setup>
    import { ref, inject } from "vue";
    import { countStore } from "@/store/count";
    //引入store钩子
    import { useCountStore } from "@/store/countStore";
    //获取store实例
    const countStore2 = useCountStore();
    //依赖注入
    //注入数据
    // const { count, changeCount } = inject("count");
    /*
        状态管理
            -状态(state)
                -应用当中的数据就是状态
                -状态即数据
            -视图(view)
                -视图用来呈现数据，用户通过视图访问数据
            -交互(actions)
                -用户的操作
                -状态会根据用户在视图中的操作发生变化
        提升状态
            -当有多个组件需要使用到同一个state时，可以将state提升到这些组件共同的祖先组件中声明
                这样一来所有这些组件百年都可以通过祖先元素来访问到这个state
     */
</script>

<style scoped></style>
