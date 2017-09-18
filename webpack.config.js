const webpack = require('webpack');
const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

let config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'output.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/, // files ending with .js
                exclude: [/node_modules/, /docker/], // exclude the node_modules directory
                loader: "babel-loader" // use this (babel-core) loader
            },
            {
                test: /\.scss$/, // files ending with .scss
                use: ExtractTextWebpackPlugin.extract({
                    use: ['css-loader', 'sass-loader'], // use this loaders
                    fallback: 'style-loader' // fallback for any CSS not extracted
                })

            }
        ]
    },

    plugins :[
        new ExtractTextWebpackPlugin('styles.css'),
        new webpack.optimize.UglifyJsPlugin() // call the uglify plugin
    ],

    devServer: {
        contentBase: path.resolve(__dirname, './public'), // A directory or URL to serve HTML content from.
        historyApiFallback: true, // fallback to /index.html for SPA
        inline: true, // inline mode set to false to disable including client scripts (like livereload)
        port: 9000,
        open: false // open default browser while launching
    },
    devtool : 'eval-source-map' // enable devtool for better debugging experience

};

module.exports = config;
