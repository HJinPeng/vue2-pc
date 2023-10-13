const Path = require('path')
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
          math: 'always'
        }
      }
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias.set('@http', resolve('src/common/http/index'))
  },
  devServer: {
    proxy: generateProxy()
  }
})

function resolve(dir) {
  return Path.join(__dirname, dir)
}

// 生成proxy
function generateProxy() {
  const proxy = JSON.parse(process.env.VUE_APP_PROXY)
  console.log('proxy', proxy)
  const result = {}
  for (const k in proxy) {
    const prefix = `/${process.env.VUE_APP_NAME}/${k}`.replace(/\/{2,}/g, '/')
    result['^' + prefix] = {
      target: proxy[k],
      changeOrigin: true,
      pathRewrite: {
        ['^' + prefix]: ''
      }
    }
  }
  console.log('result', result)
  return result
}
