// @ts-check
const webpack = require('webpack')
const path = require('path')
const { preprocess } = require('./svelte.config')

/**
 *
 * @param {webpack.Configuration} config
 */
function enhance(config) {
  config.module.rules.push({
    test: /\.(html|svelte)$/,
    exclude: /node_modules/,
    use: {
      loader: 'svelte-loader',
      options: {
        dev: config.mode === 'development',
        preprocess,
        hotReload: true,
      },
    },
  })
  config.resolve.alias.svelte = path.resolve('node_modules', 'svelte')
  return config
}

module.exports = enhance
