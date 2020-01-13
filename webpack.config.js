const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    background: ["./src/background/main.js"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]/bundle.js"
  },
  plugins: [
    new CopyPlugin([
      { from: "src/manifest.json", to: "manifest.json" },
      { from: "src/popup/index.html", to: "popup/index.html" }
    ])
  ]
};
