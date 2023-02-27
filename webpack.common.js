const path = require('path');
const PugPlugin = require('pug-plugin');

module.exports = {
  entry: {
    index: './src/index.pug'
  },
  output: {
    path: path.join(__dirname, 'dist/'),
    publicPath: '/',
    clean: true,
  },
  plugins: [
    new PugPlugin({
      pretty: true, 
      js: {
        filename: 'assets/js/[name].[contenthash:8].js',
      },
      css: {
        filename: 'assets/css/[name].[contenthash:8].css',
      }
    })
  ],
  module: {
    rules: [
      {
        test: /.pug$/,
        loader: PugPlugin.loader,
      },
      {
        test: /\.(css|sass|scss)$/,
        use: ['css-loader', 'sass-loader'],
      },
      {
        test: /\.png/,
        type: 'asset/resource'
      },
    ],
  },
};