const path = require('path');

module.exports ={
  entry: [
    './src/app.js'
  ],
  module:{
    loaders: [{
      test: /(\.js|\.jsx)$/,
      loader: "babel-loader",
      exclude: /node_modules/,
      query: { presets: ['env', 'stage-0', 'react'] },
    }]
  },
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, '/dist'),
  },
  devtool: "source-map",
  // resolve:{
  //   extensions: ['.js', '.jsx']
  // },
};
  
