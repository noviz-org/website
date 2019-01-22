const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

var config = {
    plugins: [
        new CleanWebpackPlugin(["test"])
    ],
    //devtool: 'inline-source-map',
    devServer: 
    {
        contentBase: './test/noviz/'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(css|scss|sass)$/,
                use: [
                    'style-loader',
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                              },
                              optipng: {
                                enabled: false,
                              },
                              pngquant: {
                                quality: '65-90',
                                speed: 4
                              },
                              gifsicle: {
                                interlaced: false,
                              }
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"]
    },
};

var novizConfig = Object.assign({}, config, {
    name: "noviz",
    entry: "./src/sites/noviz/index.ts",
    output: {
        path: __dirname + "/test/noviz",
        filename: "bundle.js",
        publicPath: "/"
    },
    plugins: [
        new CleanWebpackPlugin(["test/noviz"]),
        new HtmlWebpackPlugin({
            template: "./src/sites/noviz/index.html",
            filename: "index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "styles.css"
        })
    ],
});

var srConfig = Object.assign({}, config, {
    name: "sr-website",
    entry: "./src/sites/sr-website/index.ts",
    output: {
        path: __dirname + "/test/sr-website",
        filename: "bundle.js",
        publicPath: "/"
    },
    plugins: [
        new CleanWebpackPlugin(["test/sr-website"]),
        new HtmlWebpackPlugin({
            template: "./src/sites/sr-website/index.html",
            filename: "index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "styles.css"
        })
    ]
});

module.exports = [novizConfig, srConfig];
