var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");

module.exports = {
    entry: './src/scss/style.scss',
    // output: {
    //     path: path.resolve(__dirname, "dist"),
    //     filename: 'app.bundle.js'
    // },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: ['css-loader','sass-loader'],
                    publicPath: '/public'
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'public/style.css',
            disable: false,
            allChunks: true
        })
    ]
}
