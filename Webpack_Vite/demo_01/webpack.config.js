const path = require('path')
// 引入html插件
const HTMLPlugin = require("html-webpack-plugin")
module.exports = {
  mode: "production", // 设置打包模式 production 生产模式 development 开发模式
  entry: "./src/index.js", // 用来指定打包的主文件, 默认为: ./src/index.js
  // entry: ["./src/a.js", "./src/b.js"]
  // entry: {
  //   hello: "./src/a.js",
  //   b: "./src/b.js"
  // }
  output: {
    path: path.resolve(__dirname, "dist"), // 指定打包的目录,必须要绝对路径
    filename: 'main.js', // 打包后的文件夹
    //clean: true, // 自动清理打包目录
  },
  /*
    webpack 默认情况下，只会处理js文件，如果我们希望它可以处理其他类型的文件,则需要引入loader

    以CSS 为例子:
      - 使用css-loader 可以处理js中的样式
      - 使用步骤：
          1.安装: yarn add css-loader -D
          2.配置: 
          module: {
            rules: [
              {test: /\.css$/i, use: "css-loader"}
            ]
          }
  */
  module: {
    rules: [
      {test: /\.css$/i, use: ["style-loader","css-loader"]},
      {test: /\.(jpg|png|gif|svg)$/i, type: "asset/resource"}, // 图片资源类型的数据,可以通过指定type来处理
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ]
  },
  plugins: [
    new HTMLPlugin({
      title: 'suki',
      template: "./src/index.html"
    })
  ],
  devtool: "inline-source-map"
}