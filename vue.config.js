const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}
const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  devServer: {
    port: 8181,
  },
  chainWebpack(config) {
    config.module.rule('svg').exclude.add(resolve('src/svgs')).end();
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/svgs'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
      .end();
  },
});
