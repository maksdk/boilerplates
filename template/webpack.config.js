//@ts-check

//@ts-ignore
require("@babel/polyfill");

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env={}, arg={}) => {
    return {
        devtool: 'eval-source-map',
        entry: ["@babel/polyfill", "./src/index.js" ],
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "main.js"
        },
        plugins:[
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, "src", "index.html"),
                filename: "index.html"
            })
        ],
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ['@babel/preset-env'],
                            plugins: ['@babel/plugin-proposal-class-properties']
                        }
                    }
                }
            ]
        }
    };
};  