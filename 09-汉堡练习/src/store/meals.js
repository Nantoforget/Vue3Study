import { defineStore } from "pinia";
import { ref, reactive, computed } from "vue";
export const useMealsStore = defineStore("mealsStore", () => {
    const data = reactive([
        {
            id: "1",
            title: "汉堡包",
            desc: "百分百纯牛肉配搭爽脆酸瓜洋葱粒与美味番茄酱经典滋味让你无法抵挡！",
            price: 12,
            img: "/images/meals/1.png",
        },
        {
            id: "2",
            title: "双层吉士汉堡",
            desc: "百分百纯牛肉与双层香软芝，加上松软面包及美味酱料，诱惑无人能挡！",
            price: 20,
            img: "/images/meals/2.png",
        },
        {
            id: "3",
            title: "巨无霸",
            desc: "两块百分百纯牛肉，搭配生菜、洋葱等新鲜食材，口感丰富，极致美味！",
            price: 24,
            img: "/images/meals/3.png",
        },
        {
            id: "4",
            title: "麦辣鸡腿汉堡",
            desc: "金黄脆辣的外皮，鲜嫩幼滑的鸡腿肉，多重滋味，一次打动您挑剔的味蕾！",
            price: 21,
            img: "/images/meals/4.png",
        },
        {
            id: "5",
            title: "板烧鸡腿堡",
            desc: "原块去骨鸡排嫩滑多汁，与翠绿新鲜的生菜和香浓烧鸡酱搭配，口感丰富！",
            price: 22,
            img: "/images/meals/5.png",
        },
        {
            id: "6",
            title: "麦香鸡",
            desc: "清脆爽口的生菜，金黄酥脆的鸡肉。营养配搭，好滋味的健康选择！",
            price: 14,
            img: "/images/meals/6.png",
        },
        {
            id: "7",
            title: "吉士汉堡包",
            desc: "百分百纯牛肉与香软芝士融为一体配合美味番茄醬丰富口感一咬即刻涌现！",
            price: 12,
            img: "/images/meals/7.png",
        },
    ]);
    // 搜索的关键字
    let keyword = ref("");
    //搜索出来的数组
    const filterMeals = computed(() => {
        return data.filter((item) => {
            return item.title.includes(keyword.value);
        });
    });
    //保存添加的商品
    const goodsArr = reactive([]);
    //保存的方法
    const addGoods = (good, count) => {
        if (goodsArr.length != 0) {
            let a = goodsArr.findIndex((ele) => {
                return ele.id == good.id;
            });
            if (a != -1) {
                goodsArr[a].num++;
            } else {
                good.num = count;
                goodsArr.push(good);
            }
        } else {
            good.num = count;
            goodsArr.push(good);
        }
    };
    //数量减少的方法
    const minusGoods = (good) => {
        let a = goodsArr.findIndex((ele) => {
            return ele.id == good.id;
        });
        goodsArr[a].num--;
    };
    //食物的总数量
    const foodsNum = computed(() => {
        return goodsArr.reduce((prev, next) => {
            return prev + next.num;
        }, 0);
    });
    //食物的总价格
    const foodsPrice = computed(() => {
        return goodsArr.reduce((prev, next) => {
            return prev + next.price * next.num;
        }, 0);
    });
    return {
        data,
        keyword,
        filterMeals,
        foodsNum,
        goodsArr,
        addGoods,
        foodsPrice,
        minusGoods,
    };
});
