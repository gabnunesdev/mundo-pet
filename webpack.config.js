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
    publicPath: "./",
    clean: true, // limpa a pasta docs antes de gerar o build
  },

  devServer: {
    static: {
      directory: path.join(__dirname, "docs"),
    },
    port: 3000,
    open: true,
    liveReload: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      favicon: "./src/assets/logo.svg",
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/assets"),
          to: "assets",
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
