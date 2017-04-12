import webpack from 'webpack'
import path  from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: './index.html',
  inject: 'body'
})

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'dist'),
}

const LAUNCH_COMMAND = process.env.npm_lifecycle_event

const isProduction = LAUNCH_COMMAND === 'production'
process.env.BABEL_ENV = LAUNCH_COMMAND

const productionPlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_EVN: JSON.stringify('production')
  }
})

const base = {
  entry: [PATHS.app],
  output: {
    path: PATHS.build,
    filename: 'bundle.js',
    publicPath: "/"
  },
  module: {
    rules: [
      { test: /\.js$/,  exclude: '/node_modules/', loader: 'babel-loader'},
      { test: /\.css$/, loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' }
    ]
  },
}

base.output.publicPath = '/'

var developmentConfig = {
  devtool: 'cheap-module-inline-source-map',
  devServer: {
    contentBase: PATHS.build,
    hot: true,
    inline: true,
    port: 8080,
    historyApiFallback: true
  },
  plugins: [HtmlWebpackPluginConfig, new webpack.HotModuleReplacementPlugin()],
}

var productionConfig = {
  devtool: 'cheap-module-source-map',
  plugins: [HtmlWebpackPluginConfig, productionPlugin]
}

export default Object.assign({}, base,
  isProduction === true ? productionConfig : developmentConfig
)