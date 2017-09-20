const webpack = require('webpack');
const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssets = require('optimize-css-assets-webpack-plugin');


let config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'output.js'
    },
    resolve: { // These options change how modules are resolved
        extensions: ['.js', '.jsx', '.json', '.scss', '.css', '.jpeg', '.jpg', '.gif', '.png'], // Automatically resolve certain extensions
        alias: { // Create aliases
            images: path.resolve(__dirname, 'src/assets/images')  // src/assets/images alias
        }
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.js$/, // files ending with .js
                exclude: [/node_modules/, /docker/],
                loader: "eslint-loader"
            },
            {
                test: /\.js$/, // files ending with .js
                exclude: [/node_modules/, /docker/], // exclude the node_modules directory
                loader: "babel-loader" // use this (babel-core) loader
            },
            {
                test: /\.scss$/, // files ending with .scss
                use: ['css-hot-loader'].concat(ExtractTextWebpackPlugin.extract({
                    use: ['css-loader', 'sass-loader', 'postcss-loader'], // use this loaders
                    fallback: 'style-loader' // fallback for any CSS not extracted
                }))
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i, // image files
                loaders: [
                    'file-loader?context=src/assets/images/&name=images/[path][name].[ext]', {
                        loader: 'image-webpack-loader',
                        query: {
                            mozjpeg: {
                                progressive: true,
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            optipng: {
                                optimizationLevel: 4,
                            },
                            pngquant: {
                                quality: '75-90',
                                speed: 3,
                            }
                        }
                    }
                ],
                exclude: [/node_modules/, /docker/],
                include: __dirname,
            }
        ]
    },

    plugins: [
        new ExtractTextWebpackPlugin('styles.css'),
        new webpack.optimize.UglifyJsPlugin() // call the uglify plugin
    ],

    devServer: {
        contentBase: path.resolve(__dirname, './public'), // A directory or URL to serve HTML content from.
        historyApiFallback: true, // fallback to /index.html for SPA
        inline: true, // inline mode set to false to disable including client scripts (like livereload)
        port: 9000,
        open: false, // open default browser while launching
        compress: true // Enable gzip compression for everything served:
    },
    devtool: 'eval-source-map' // enable devtool for better debugging experience

};

module.exports = config;

if (process.env.NODE_ENV === 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin(), // call the uglify plugin
        new OptimizeCSSAssets() // call the css optimizer (minification)
    )
}
