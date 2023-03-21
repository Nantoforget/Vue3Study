//创建一个对象
const obj = {
    name: "孙悟空",
    age: 18,
};
/* 
    希望在修改一个属性时，可以进行一些其他操作，比如触发元素重新渲染！
    要实现这个目的，必须要对对象进行改造，vue3中使用的是代理(proxy)模式来完成对象的改造
 */
//为obj创建一个代理
//handler用来指定代理的行为
const handler = {
    //get用来指定读取数据时，它的返回值就是最终读取到的值
    //指定get后，再通过代理读取对象属性时，就会调用get方法来获取值
    get(target, prop, receiver) {
        /* 
            在vue中，
         */
        /* 
            三个参数：
                target:被代理的对象
                prop:读取的对象
                receiver:代理对象(proxy)
        */
        return target[prop];
    },
    //set会在通过代理修改对象时调用
    set(target, prop, value, receiver) {
        target[prop] = value;
    },
};
//创建代理
const proxy = new Proxy(obj, handler);
//修改代理属性
proxy.age = 28;
console.log(proxy);
console.log(proxy.age);
console.log(obj);
