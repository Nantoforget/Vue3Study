<template>
    <h1>{{ stu.name }}--{{ stu.age }}--{{ stu.gender }}</h1>
    <h2>{{ info }}</h2>
    <button @click="changeMsg">Click Me</button>
    <h1>{{ name }}</h1>
</template>
<script>
export default {
    data() {
        return {
            stu: {
                name: "孙悟空",
                age: 18,
                gender: "男"
            },
            name1: "孙",
            name2: "悟空",
        }
    },
    //methods中的方法每次组件重新渲染都会调用
    methods: {
        changeMsg() {
            if (this.stu.age >= 18) {
                this.stu.age = 17
            } else {
                this.stu.age = 18
            }

        }
    },
    //计算属性，只在其依赖的数据发生变化时才会重新执行
    //会对数据进行缓存
    computed: {
        info() {
            return this.stu.age >= 18 ? "成年了" : "未成年"
        },
        name: {
            get() {
                return this.name1 + this.name2
            },
            //在修改时被调用
            set(value) {
                this.name1 = value[0]
                this.name2 = value.slice(1)
            }
        }
    }
}
</script>