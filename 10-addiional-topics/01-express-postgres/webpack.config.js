const path = require("path");
const nodeExternals = require("webpack-node-externals");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry : {
        server : "./server.js"
    },
    output :{
        path : path.join(__dirname, "dist"),
        filename : "[name].js",
        publicPath : "/"
    },
    module : {
        rules : [
            {
                test : /\.js$/,
                exclude : /node_modules/,
                use : {
                    loader : "babel-loader"
                }
            },{
                test :/\.html$/,
                use : [{loader : "html-loader"}]
            }
        ]
    },
    plugins : [
        new HTMLWebpackPlugin({
            template : "./index.html",
            filename :"./index.html",
            excludeChunks : ["server"]
        })
    ],
    target : "node",
    node : {
        __dirname : false,
        __filename : false
    },
    externals : [nodeExternals()]

}