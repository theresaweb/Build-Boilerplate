const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
	cache: true,
	entry: {
		'bundle-name-with-multiple-files': [
			'/src/js/file1',
			'/src/js/file2',
			'/src/js/file3'
		],
		'bundle-name-with-single-file': ['./src/js/some-js-file.js'],
	},
	mode: 'production',
	stats: {
		orphanModules: true,
	},
	devtool: 'source-map',
	watch: false,
	watchOptions: {
		aggregateTimeout: 300,
		poll: 1000,
		ignored: [
			'**/dist',
			'**/bin',
			'**/docs',
			'**/inc',
			'**/logs',
			'**/node_modules',
			'**/vendor',
		],
	},
	output: {
		path: path.resolve(__dirname, 'dist/js'),
		filename: '[name].min.js',
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							babelrc: true,
						},
					},
				],
			},
		],
	},
	plugins: [
		new ESLintPlugin({
			context: '../', // <-- change context path as needed
			emitError: true,
			emitWarning: true,
			failOnError: true,
			extensions: ['js'],
		}),
	],
};