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
    },{
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
    },{
      test: /\.ncss$/,
      loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' 
    },]
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
  
