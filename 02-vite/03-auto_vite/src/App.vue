<template>
    <h1>{{ message }}</h1>
</template>
<script>
export default {
    //vm.$data是实际的代理对象，通过vm可以直接访问到$data中的属性
    //vm.$data.message等价于vm.message
    //可以通过vm.$data动态想组件中添加响应式数据
    data() {
        return {
            message: "哈哈哈"
        }
    },
    created() {
        //通过vm.$data动态想组件中添加响应式数据，但不建议这么做
        this.$data.name = "孙悟空"
    }
}
</script>