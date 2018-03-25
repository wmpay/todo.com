const path = require('path');

const config = {
	resolve: {
		extensions: ['.js'],
	},
	entry: {
		todo: path.join(__dirname, 'src', 'index.js'),
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
};

module.exports = config;