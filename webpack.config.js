const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

// Simplifies creation of HTML files to serve your webpack bundles
const HtmlWebpackPlugin = require('html-webpack-plugin')
const StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin')
const VENDOR_LIBS = [
    "axios",
    "react",
    "react-dom",
    "react-redux",
    "react-router",
    "react-router-dom",
    "react-transition-group",
    "redux",
    "redux-form"  

]

const config = {
	entry: {
		bundle: './src/index.js',
		vendor: VENDOR_LIBS,
		style: './src/style.less'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
		filename: "[name].js"
	},
	module: {
		rules: [
			{
				exclude: '/node_modules/',
				use: 'babel-loader',
				test: /\.js$/,
			},
			{
				loader: ExtractTextPlugin.extract({
					use: [{loader: 'css-loader'}, {loader: 'less-loader'}, {loader: 'postcss-loader'}]
				}),
				test: /\.less$/
			}
		]
	}, 
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor'
		}),
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		new ExtractTextPlugin('Styles/style.css')
	],
	devServer: {
	    historyApiFallback: true,
	    contentBase: './',
	    watchOptions: {
	      aggregateTimeout: 300,
	      poll: 1000
	    }
	}
}

module.exports = config