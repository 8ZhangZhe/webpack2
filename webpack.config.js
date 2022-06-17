const { join } = require("path");
// 引入自动生成 html 的插件
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/main.js", // 入口
  output: {
    path: join(__dirname, "lib"), // 出口路径
    filename: "webpack-dome.js", // 出口文件名
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 建议是绝对路径
      template: join(__dirname, "public/index.html"),
    }),
  ],
  devServer: {
    port: 30000, // 端口号
    open: true
  },
  module: {
    rules: [
        {
            test: /\.css$/i,
            use: [ "style-loader", "css-loader"]
        }
    ]
  }
};
