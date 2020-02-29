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
          'css-loader',
          'postcss-loader',
          'sass-loader',
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
