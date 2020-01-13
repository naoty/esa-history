const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  plugins: [
    new CopyPlugin([
      { from: "src/manifest.json", to: "manifest.json" },
      { from: "src/popup/index.html", to: "popup/index.html" }
    ])
  ]
};
