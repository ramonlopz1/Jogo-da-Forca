const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlMinimizerPlugin = require('html-minimizer-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')
const modoDev = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: [
        "./src/main.js", 
        "./src/assets/js/script.js",
        "./src/assets/js/canvas.js",
    ],

    output: {
        filename: 'assets/js/main.js',
        path: __dirname + '/public'
    },

    module: {
        rules: [
            {
                test: /\.s?[ac]ss$/, // . s [ac] ss
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }, {
                test: /\.(png|svg|jpg|gif)$/i,
                use: ['file-loader']
            }, {
                test: /\.html$/i,
                type: "assets/resource"
            }
        ]
    },

    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                parallel: true,
                terserOptions:{
                    ecma: 6,
                }
            }),
            new HtmlMinimizerPlugin()
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: "assets/css/style.css"
        }),

        new CopyPlugin({
            patterns: [
                {
                    context: path.resolve(__dirname),
                    from: "./src/index.html"
                }
            ]
        })
    ],

    devServer: {
        static: {
            directory: ("./public")
        },
        compress: true,
        port: 9000
    }
}