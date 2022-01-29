// 导入path模块
const path = require("path");
// 定义js打包规则
module.exports = {
    // 入口函数
    entry: "./webpack/src/main.js",
    // 编译之后的输出
    output: {
        // 定义输出的目录
        path: path.resolve(__dirname, "./dist"),
        // 定义输出的文件
        filename: "merge.js"
    },
    module: {
        rules: [{
            test: /\.css$/, // 把项目中所有的.css文件进行打包
            use: ["style-loader", "css-loader"]
        }]
    }
}