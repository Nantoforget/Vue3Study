import { defineStore } from "pinia";
import { ref, reactive, computed } from "vue";
export const useStuStore = defineStore("stuStore", () => {
    //存储学生信息
    const stu_ARR = reactive([
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
    //删除功能
    const delStu = (index) => {
        if (confirm("您确定删除吗？")) {
            stu_ARR.splice(index, 1);
        }
    };
    //保存添加学生的信息
    const newStu = reactive({
        name: "",
        age: 18,
        gender: "男",
        address: "",
    });
    //添加功能
    const addStu = (newStu) => {
        const newId = stu_ARR.at(-1) ? stu_ARR.at(-1).id + 1 : 1;
        newStu.id = newId;
        stu_ARR.push(newStu);
    };
    return {
        stu_ARR,
        delStu,
        newStu,
        addStu,
    };
});
