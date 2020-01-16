const { override, fixBabelImports,addWebpackAlias } = require("customize-cra");
/* import path from 'path'; */
const path = require('path');

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: "css"
  }),
  addWebpackAlias({
    ['@']: path.resolve(__dirname, 'src')
  })
);
