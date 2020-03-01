const path = require('path')
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const globule = require('globule')

const configs = {
  entry: {
    main: `./src/assets/js/main.js`,
    'main.css': `./src/assets/css/main.scss`,
  },
  output: {
    filename: 'assets/js/[name].[hash].js',
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
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
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
      {
        test: /\.pug$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'pug-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './assets/css/main.[hash].css',
    }),
    new FixStyleOnlyEntriesPlugin(),
  ],
}

const pugFiles = globule.find('./src/**/*.pug', {
  ignore: ['./src/**/_*/*.pug', './src/**/_*.pug'],
})

pugFiles.forEach((file) => {
  configs.plugins.push(
    new HtmlWebpackPlugin({
      template: file,
      filename: `${file.replace('./src/', '').replace('.pug', '.html')}`,
    })
  )
})

module.exports = configs
