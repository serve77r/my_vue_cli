const pathlib = require('path');
const Webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const DEV = true;

module.exports = {
  mode:DEV?"development":"production",
  entry:'./src/index.js',
  output:{
    path:pathlib.resolve('dist'),
    filename:'1.bundle.js'
  },
  devServer:{
    contentBase:pathlib.resolve('dist'),
    port:8888,
    hot:true,
    // historyApiFallback: true,
  },
  resolve:{
    extensions:[".ts", ".tsx", ".js",".vue"],
    alias: {
      'vue$': 'vue/dist/vue.js'//使用vue.js，才能调用vue，否则报错
    }
  },
  plugins:[
    new Webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin()
  ],
  module:{
    rules:[
      // css
      {test:/\.css$/i,use:['style-loader','vue-style-loader','css-loader']},
      //js
      {
        test:/\.js$/i,
        use:['babel-loader'],
        // exclude: /(node_modules|bower_components)/,
        exclude: file => (
          /node_modules/.test(file) &&
          !/\.vue\.js/.test(file)
        )
      },
      // img
      {test:/\.(jpg|png|gif)$/i,use:['file-loader']},
      //ts
      {test:/\.tsx?/i,use:['ts-loader']},
      //vue
      {test:/\.vue$/i,use:['vue-loader']}
    ]
  }
}
