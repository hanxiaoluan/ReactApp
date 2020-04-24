const {
  override,
  fixBabelImports,
  addWebpackAlias,
  overrideDevServer,
  addWebpackPlugin,
  addPostcssPlugins,
  setWebpackStats,
  disableEsLint,
} = require('customize-cra');
/* 显示进度条 */
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const chalk = require('chalk');
/* import path from 'path'; */
const path = require('path');
const plugins = [new BundleAnalyzerPlugin()];
module.exports = {
  webpack: override(
    disableEsLint(),
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: 'css',
    }),
    addWebpackAlias({
      ['@']: path.resolve(__dirname, 'src'),
      ['action']: path.resolve(__dirname, 'src/actions'),
      ['styles']: path.resolve(__dirname, 'src/styles'),
    }),
    addWebpackPlugin(
      new ProgressBarPlugin({
        complete: '█',
        format: `${chalk.green('Building')} [ ${chalk.green(
          ':bar',
        )} ] ':msg:' ${chalk.bold('(:percent)')}`,
        clear: true,
      }),
    ),
    setWebpackStats({
      warningsFilter: ['filter', /filter/, (warning) => true],
    }),
    /* addPostcssPlugins([
      require('postcss-pxtorem')({
        rootValue: 75,
        propList: ['*'],
        minPixelValue: 2,
        selectorBlackList: ['am-'],
      }),
    ]), */
    /* (config, env) => {
      config.plugins = [...config.plugins, ...plugins];
      config.optimization = {
        minimize: true,
      };
      return config;
    }, */
  ),
  deServer: overrideDevServer(),
};
