const isDev = process.env.NODE_ENV === 'development'
const htmlPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const path = require('path')
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
        modules: [
            'node_modules',
            // path.resolve(__dirname, './lib')
        ],
        extensions: [".vue", ".js", ".ts"],
        alias: {
            "@": path.resolve(__dirname, './lib')
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
