// const img1 = require('./asset/s.jpg');
// const resetCss = require('./asset/index.css');
const Vue = require('vue');
const Main = require('./Main').default;
// console.log(Main);
// Vue.component('Ma',Main);
new Vue({
  el: '#main',
  components:{
    Main
  },
  // render: (createElement) => createElement(Main),
  // template:'<div class="example">{{ msg }}</div>'
  template:'<Main/>',
  // render: h => h(Main)
})

// console.log('可以了');
