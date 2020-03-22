const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const ROOT = path.resolve(__dirname, 'src')
const DESTINATION = path.resolve(__dirname, 'dist')

module.exports = {
  mode: "development",
  context: ROOT,
  entry: './demo.ts',
  output: {
    path: DESTINATION, // output directory
    filename: '[name].[chunkhash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: 'body',
    }),
  ],
  module: {
    rules: [
      {
        test: [/\.tsx?$/, /\.ts?$/],
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      }
    ],
  },
}
