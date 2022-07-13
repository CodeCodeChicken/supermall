module.exports = {
  configureWebpack: {
    resolve: {
      // 配置别名
      alias: {
        assets: 'src/assets',
        common: 'src/common',
        components: 'src/components',
        network: 'src/network',
        views: 'src/views'
        /*
        不需要配置store和router
        在所有组件下都可使用
        this.$router
        this.$store
        获取到对象
        */
      }
    }
  }
}
