module.exports = (ctx) => {
  let plugins = {
    'postcss-import': {},
    autoprefixer: {},
  }

  if (ctx.webpack.mode === 'production') {
    plugins = {
      ...plugins,
      cssnano: {},
    }
  }

  return { plugins }
}
