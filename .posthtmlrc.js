module.exports = {
  plugins: {
    'posthtml-include': {
      root: __dirname + '/src/views'
    },
    'posthtml-modules': {
      root: './src'
    }
  }
}
