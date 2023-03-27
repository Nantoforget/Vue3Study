import { reactive } from "vue";
export const countStore = reactive({
    count: 0,
    changeCount() {
        this.count++;
    },
});
