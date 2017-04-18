var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        index: ['./index.js']
    },
    output: {
        path: '/bin',
        publicPath: '/bundle/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: "style-loader!css-loader!sass-loader"
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader"
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            // { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
            // { test: /bootstrap.+\.(jsx|js)$/, loader: 'imports-loader?jQuery=jquery,$=jquery,this=>window' },
            { test: /\.png$/, loader: "url-loader?limit=100000" },
            { test: /\.jpg$/, loader: "file-loader" },
            { test: /\.gif$/, loader: "file-loader" },
            { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.(woff|woff2)(\?.*$|$)/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
            { test: /\.ttf(\?.*$|$)/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream' },
            { test: /\.eot(\?.*$|$)/, loader: 'file-loader' },
            { test: /\.svg(\?.*$|$)/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml' },
        ]
    }
};
