/**
 * Created by ali on 16-11-24.
 */
var webpack = require('webpack');
module.exports = {
    port: 8080,
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/index.jsx'
    ],
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist',
        hot: true,
        port: 8080,
        inline: true,
        stats:{
            colors: true
        },
        process: true,
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.jsx/,
                exclude: /node_modules/,
                loader: 'react-hot-loader/webpack!babel-loader?presets[]=es2015&presets[]=react'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};