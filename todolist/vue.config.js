/* webpack 覆盖配置文件 */
const path = require('path')
module.exports = {
  devServer: {
    // open: true,
    /* 前端跨域 - 反向代理 */
    proxy: {
      // 标识符: config 
      /* ! 标识符我们选取目标的域名后的第一个路径 */
      '/ajax': {
        target: 'http://m.maoyan.com', //target表示目标源，也就是你要请求的后端的 地址 
        changeOrigin: true,// 使用我们自己的地址来代替后端地址  
        /* http://m.maoyan.com/ajax
           http://localhost:8080/ajax
        */
      },
      '/index.php': {
        target: 'http://www.qinqin.net',
        changeOrigin: true 
      }
    }
  },
  lintOnSave: false,// 禁用eslint
  // 路径别名
  // chainWebpack: config => {
  //   config.resolve.alias 
  //     // .set( 别名，绝对路径 )
  //     .set('@', path.join( __dirname,'./src') ) // src目录
  //     .set('Views',path.join( __dirname,'./src/views') )// Views   views目录
  // }
}