const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack').container
  .ModuleFederationPlugin;

module.exports = {
  entry: './src/index',
  cache: false,

  mode: 'development',
  devtool: 'source-map',

  devServer: {
    contentBase: './dist',
    host: 'localhost',
    port: '3001',
  },

  optimization: {
    minimize: false,
  },

  output: {
    //'http://localhost:3001/',
    publicPath: 'http://app-bank-account.s3-website-eu-west-1.amazonaws.com/',
  },

  resolve: {
    extensions: ['.jsx', '.js', '.json'],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: require.resolve('babel-loader'),
        exclude: /node_modules/,
        options: {
          presets: [require.resolve('@babel/preset-react')],
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'bankAccount',
      library: { type: 'var', name: 'bankAccount' },
      filename: 'remoteEntry.js',
      remotes: {
        component_library: 'component_library',
      },
      exposes: {
        BankAccount: './src/Root',
      },
      shared: ['react', 'react-dom', '@material-ui/core', '@material-ui/icons'],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      chunks: ['main'],
    }),
  ],
};
