const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index:'./src/app/index.js',
    predet:'./src/app/predet.js',
    person:'./src/app/person.js'
  },
  output:{
    path: __dirname,
    filename: 'src/public/js/[name].bundle.js'
  },

  plugins:[
    new HtmlWebpackPlugin({
      template: './src/public/index.html',
      inject: true,
      chunks: ['index'],
      filename: '/src/public/js/index.bundle.js'
    }),
    new HtmlWebpackPlugin({
      template: '/src/public/predet.html',
      inject: true,
      chunks: ['predet'],
      filename: '/src/public/js/predet.bundle.js'
    }),
    new HtmlWebpackPlugin({
      template: '/src/public/index.html',
      inject: true,
      chunks: ['person'],
      filename: '/src/public/js/person.bundle.js'
    })
  ],
  module: {
    rules:[
      {
          test:/\.js$/,
          exclude:/node_modules/,
          use: {
            loader:'babel-loader'
          }
      },
      {
        test: /\.vue$/,
        loader:'vue-loader'
      }
    ]
  },
  plugins:[
    new VueLoaderPlugin()
  ]
};
