const webpack = require('webpack');
const AotPlugin = require('@ngtools/webpack').AotPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env = {}) => {

  const config = {
    entry: {
      main: './src/main.ts'
    },
    output: {
      path: './dist',
      filename: '[name].bundle.js',
    },
    resolve: {
      extensions: ['.ts', '.js', '.html'],
    },
    module: {
      rules: []
    },
    devtool: '#source-map',
    plugins: [
      new CopyWebpackPlugin([{ from: './src/index.html' }])
    ]
  };


  if (env.mode === 'production') {

    config.module.rules.push(
      { test: /\.ts$/, loaders: ['@ngtools/webpack'] }
    );
    config.plugins = config.plugins.concat([
      new AotPlugin({
        tsConfigPath: './tsconfig.json',
        entryModule: 'src/app/app.module#AppModule'
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
          screw_ie8: true
        },
        comments: false,
        sourceMap: true
      })
    ]);

  } else {

    config.module.rules.push(
      { test: /\.ts$/, loaders: ['awesome-typescript-loader', 'angular2-router-loader'] }
    );

  }

  return config;
};
