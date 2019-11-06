module.exports = {
  devServer: {
    port: 2130, // 端口号配置
    open: true
  },
  configureWebpack: {
    externals: {
      AMap: "window.AMap"
    }
  }
};
