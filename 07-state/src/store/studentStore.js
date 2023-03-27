import { defineStore } from "pinia";
import { ref, computed, reactive } from "vue";
//创建store
export const useStudentStore = defineStore("studentStore", () => {
    const students = reactive({
        name: "孙悟空",
        age: 18,
        gender: "男",
        address: "花果山",
    });
    const name = ref("孙悟空");
    const age = ref(18);
    const gender = ref("男");
    const address = ref("花果山");
    //创建改变students中age的方法
    const changeAge = () => {
        students.age++;
        age.value++;
    };
    const title = computed(() => {
        return "Mr." + name.value;
    });
    return {
        students,
        name,
        age,
        gender,
        address,
        changeAge,
        title,
    };
});
