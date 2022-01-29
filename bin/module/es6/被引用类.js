export function getInfo() {
    console.log('获取数据')
}

export let name = "测试";
export let age = 18;

let name2 = "测试2";
let age2 = 19;

export {name2, age2};

// es6模块化中新的写法，方法都在 export default下，用 逗号 隔开
export default {
    test(){
        console.log("测试数据");
    },
    save(){
        console.log("保存数据");
    }
}