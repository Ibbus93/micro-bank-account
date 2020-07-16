const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack').container
  .ModuleFederationPlugin;

const deps = require("./package.json").dependencies;

module.exports = {
  entry: './src/index',
  cache: false,

  mode: 'development',
  devtool: 'source-map',

  devServer: {
    contentBase: './dist',
    host: 'localhost',
    port: '3002',
  },

  optimization: {
    minimize: false,
  },

  output: {
    // publicPath: 'http://localhost:3002/',
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
        './BankAccount': './src/Root',
      },
      shared: {
        react: {
          eager: true,
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          eager: true,
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      chunks: ['main'],
    }),
  ],
};
