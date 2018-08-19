// const img1 = require('./asset/s.jpg');
// const resetCss = require('./asset/index.css');
const Vue = require('vue');
const Main = require('./Main').default;//需要添加default,
// 参考https://github.com/vuejs/vue-loader/releases/tag/v13.0.0

new Vue({
  el: '#main',
  components:{
    Main
  },
  template:'<Main/>',
})
