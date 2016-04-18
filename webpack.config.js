
var webpack = require('webpack');
var merge = require('webpack-merge');
var extractTextPlugin = require('extract-text-webpack-plugin');
var CleanPlugin = require('clean-webpack-plugin');

const TARGET = process.env.npm_lifecycle_event;
const BUILD_DIR = './build';

// webpack.config.js
const common = {

    entry: './entry.jsx',

    output: {
        filename: 'bundle.js',
        path: BUILD_DIR
    },

    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: extractTextPlugin.extract('css!autoprefixer-loader!sass'),
                exclude: /node_modules/
            },
            {
                test: [/\.jsx$/, /\.js$/],
                loader: 'babel',
                query: {
                    presets: [
                        'react',
                        'babel-preset-es2015'
                    ]
                }
            },
        ]
    },

    plugins: [
        new extractTextPlugin('style.css', {
            allChunks: true
        })
    ]

};

// Dev specific webpack configurations
if (TARGET === 'start' || !TARGET) {

    module.exports = merge(common, {

        devServer: {

            // Config options specific to dev. environment
            historyApiFallback: true,
            hot: true,
            inline: true,
            progress: true,

            host: process.env.HOST,
            port: 3000,

            stats: 'errors-only'

        },

        devTool: 'eval-source-map',

        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ]

    });

};

// Production specific webpack configuration
if (TARGET === 'build') {

    module.exports = merge(common, {

        plugins: [
            // Cleans the exisitin build directory (if there is one)
            new CleanPlugin(BUILD_DIR + "/*"),
            // Lets React know this is a production build
            new webpack.DefinePlugin({
                'process.env.NODE_ENV' : '"production"'
            }),
            // Minifies the javascript
            new webpack.optimize.UglifyJsPlugin({
                minimize: true,
                // With comments stripped out
                output: {
                    comments: false
                },
                compress: {
                    warnings: false
                }
            })
        ]

    });

};
