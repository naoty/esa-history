const CopyPlugin = require("copy-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    background: ["./src/background/main.js"],
    popup: ["./src/popup/main.js"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]/bundle.js"
  },
  resolve: {
    extensions: [".js", ".vue"]
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      }
    ]
  },
  plugins: [
    new CopyPlugin([
      { from: "src/manifest.json", to: "manifest.json" },
      { from: "src/popup/index.html", to: "popup/index.html" }
    ]),
    new VueLoaderPlugin()
  ]
};
