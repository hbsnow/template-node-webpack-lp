const path = require('path')
const MiniCssExtract = require('mini-css-extract-plugin')
const FixStyleOnlyEntries = require('webpack-fix-style-only-entries')

module.exports = {
  entry: {
    main: `./src/assets/js/main.js`,
    'main.css': `./src/assets/css/main.scss`,
  },
  output: {
    filename: 'assets/js/[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!(dom7|ssr-window|swiper)\/).*/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.scss/,
        use: [
          MiniCssExtract.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 2,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new FixStyleOnlyEntries(),
    new MiniCssExtract({
      filename: 'assets/css/[name]',
    }),
  ],
}
