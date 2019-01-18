module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 37.5,
      unitPrecision: 5,
      propList: [
        'height',
        'width',
        'padding',
        'margin',
        'top',
        'left',
        'right',
        'bottom'
      ],
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 1
    }
  }
}
