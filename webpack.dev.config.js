const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

var os = require('os');
var ifaces = os.networkInterfaces();
let ip;

Object.keys(ifaces).forEach(function(ifname) {
  var alias = 0;

  ifaces[ifname].forEach(function(iface) {
    if ('IPv4' !== iface.family || iface.internal !== false) {
      // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
      return;
    }

    if (alias >= 1) {
      // this single interface has multiple ipv4 addresses
      ip = iface.address;
      console.log('Your local address' + ':' + alias, ip + ':8080');
    } else {
      // this interface has only one ipv4 adress
      ip = iface.address;
      console.log('Your local address', ip + ':8080');
    }
    ++alias;
  });
});

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    chunkFilename: '[id].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      Actions: path.resolve(__dirname, `src/stores/actions/`),
      Common: path.resolve(__dirname, `src/common/`),
      agileRequest: path.resolve(__dirname, `src/agileRequest/`),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(s*)css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader', // translates CSS into CommonJS
              // options: {
              //   importLoaders: 1,
              //   modules: true,
              //   localIdentName: "[name]_[local]_[hash:base64:5]"
              // }
            },
            { loader: 'sass-loader' },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: () => [
                  autoprefixer({
                    browsers: ['> 1%', 'last 2 versions'],
                  }),
                ],
              },
            },
          ],
        }),
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: 'file-loader?limit=8000&name=images/[name].[ext]',
          },
        ],
      },
    ],
  },
  devServer: {
    stats: 'errors-only',
    historyApiFallback: true,
    // host: ip,
    port: 8080,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: __dirname + '/index.html',
      filename: 'index.html',
      inject: 'body',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      children: true,
      async: true,
      minChunks: Infinity,
    }),
    new ExtractTextPlugin({ filename: 'style.bundle.css' }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    new SWPrecacheWebpackPlugin({
      dontCacheBustUrlsMatching: /\.\w{8}\./,
      filename: 'service-worker.js',
      logger(message) {
        if (message.indexOf('Total precache size is') === 0) {
          // This message occurs for every build and is a bit too noisy.
          return;
        }
        console.log(message);
      },
      minify: true,
      navigateFallback: __dirname + '/index.html',
      navigateFallbackWhitelist: [/^(?!\/__).*/],
      staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
    }),
  ],
};
