const path = require( "path" );

module.exports = {
	mode: "development",
	entry: "./src/js/app.js",
	module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      }
    ]
  },
	output: {
		path: path.resolve(__dirname, "public"),
		filename: "app.bundle.js"
	}
};
