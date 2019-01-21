'use strict'

const path = require('path')
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin')

const resolve = (dir) => {
  return path.join(__dirname, './', dir)
}
const genPlugins = () => {
  let plugins = []

  // HtmlWebpackIncludeAssetsPlugin
  // 为静态资源文件添加 hash，防止缓存
  plugins.push(
    new HtmlWebpackIncludeAssetsPlugin({
      assets: ['config.local.js'],
      append: false,
      hash: true
    })
  )

  return plugins
}

module.exports = {
  publicPath: './',
  configureWebpack: () => ({
    name: 'vue-cli3-template',
    resolve: {
      alias: {
        '@': resolve('src'),
        '@assets': resolve('src/assets'),
        '@less': resolve('src/assets/less'),
        '@views': resolve('src/views')
      }
    },
    plugins: genPlugins()
  })
}
