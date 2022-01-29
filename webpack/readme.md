#使用webpack合并 js文件
1. 准备一个入口文件 main.js，其实就是模块集中进行引入
2. 在根目录下定义个webpack.config.js文件配置打包的规则
3. 执行webpack
---
使用webpack合并打包 css文件
- 1、需要安装 style-loader 和 css-loader 两个依赖。
>webpack本身只能处理JavaScript模块，若要处理其他，就需要使用 loader进行转换。
css-loader 是将css 装载到 javascript；style-loader是让javascript认识css 

```
npm install --save-dev style-loader css-loader
```

- 2、修改webpack.config.js
