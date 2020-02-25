const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  entry: {
    app: './src/App.tsx'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[hash].js'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  devtool: 'source-map',
  optimization: {
    minimizer: [new TerserPlugin()],
    splitChunks: {
      chunks: 'async',
      name: true,
      cacheGroups: {
        vendors: {
          name: 'vendors',
          chunks: 'all',
          reuseExistingChunk: true,
          priority: 1,
          filename: 'assets/vendor-[hash].js',
          enforce: true,
          test(module, chunks) {
            const name = module.nameForCondition && module.nameForCondition()
            return chunks.some(chunks => chunks.name != 'vendor' && /[\\/]node_modules[\\/]/.test(name))
          }
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-react'
            ]
          }
        }
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1000,
              fallback: 'file-loader',
              name: 'images/[name].[ext]',
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'index.html') }),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: './dist'
    })
  ]
}