const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    vendor: [
      './node_modules/es6-shim/es6-shim.min.js'
    ],
    app: './src/index.tsx'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './../dist')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          configFile: path.resolve(__dirname, 'webpack.tsconfig.json')
        }
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  }
};
