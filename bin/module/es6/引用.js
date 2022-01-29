import {getInfo, name} from './被引用类'
getInfo();
console.info(name);

// 对应es6新的模块化写法的，新的导入方法，导入成一个对象，然后可以使用对象的方法和属性
import user from './被引用类'
user.test();
user.save()