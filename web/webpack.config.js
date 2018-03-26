const path = require('path');

const config = {
	resolve: {
		extensions: ['.js'],
		alias: {
			// use compiler-included build
      'vue$': 'vue/dist/vue.esm.js',
    },
	},
	entry: {
		todo: path.join(__dirname, 'src', 'index.js'),
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				exclude: /node_modules/,
				use: {loader: 'html-loader'},
			},
		],
	},
};

module.exports = config;