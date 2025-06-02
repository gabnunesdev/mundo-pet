const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  target: "web",
  mode: "development",

  entry: "./src/main.js",

  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "docs"),
    publicPath: "./mundo-pet/",

    clean: true, // limpa a pasta docs antes de gerar o build
  },

  devServer: {
    port: 3000,
    open: true,
    hot: true, // Ativa Hot Module Replacement
    watchFiles: ["src/**/*", "index.html"],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./index.html"),
      favicon: path.resolve("src", "assets", "./logo.svg"),
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "assets"),
          to: path.resolve(__dirname, "docs", "src", "assets"),
        },
      ],
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },

  resolve: {
    extensions: [".js"],
  },
};
