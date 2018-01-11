const path = require('path');
const autoprefixer = require('autoprefixer');
module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: ''
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /model_modules/
            },
            {
                test:/\.css$/,
                exclude: /model_modules/,
                use: [
                        {loader: 'style-loader'},
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                modules: true,
                                localIdentName: '[name]_[local]_[hash:base64:5]'
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                ident: true,
                                plugins: () => [
                                    autoprefixer({
                                            browsers: [
                                                "> 1%",
                                                "last 2 versions"
                                            ]
                                        })
                                ]
                            }
                        }   
                ]                
            }
        ]
    }
};