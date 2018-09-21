// const webpack = require('webpack');

module.exports = {

    target: "web",
    externals: [
        /^(dojo)(.)*/i,
        /^(dijit)(.)*/i,
        /^(mxui)(.)*/i,
        "react",
        "react-dom"
    ],
    // optimization: {
    //     minimize: false
    // },
    devtool: "source-map",
    // mode: "production",
    mode: "development",
    output: {
        filename: "./dist/zip/com/mendix/widget/custom/MxReactWidget/MxReactWidget.js",
        libraryTarget: "umd",
    },
    module: {
        rules: [
            { sideEffects: true },
            { test: /\.(html|svg)$/i, use: { loader: 'html-loader' } }
        ]
    },
    plugins: [
    ]
}