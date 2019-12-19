const isDev = process.env.NODE_ENV === 'development'
const htmlPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const config = {
    mode: isDev ? 'development' : 'production',
    entry: './index.ts',
    output: {
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            appendTsSuffixTo: [/\.vue$/]
                        }
                    }
                ]
            }

        ]
    },
    resolve: {
        extensions: [".js", ".ts", ".vue"],
        alias: {
            "@": "./lib"
        }
    },
    devtool: "source-map",
    target: "web",
    plugins: [
        new VueLoaderPlugin(),
        new htmlPlugin({
            template: "lib/index.html"
        })
    ]
}

module.exports = config
