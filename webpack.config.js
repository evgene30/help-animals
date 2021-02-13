const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const filename = (ext) => `[name],${ext}`;


module.exports = {
    mode: 'production',
    entry: {
        main: path.resolve(__dirname, './src/js/script.js'),
    },
    output: {

        path: path.resolve(__dirname, 'dist'),
        filename: './js/script.js',
        publicPath: ''
    },
    plugins: [
        new CleanWebpackPlugin(),
        
        new MiniCssExtractPlugin({
            filename: './css/styles.css',
            
        }),
        new HtmlWebpackPlugin({
            title: 'webpack-project',
            template: path.resolve(__dirname, './src/index.html'), // шаблон
            filename: 'index.html', // название выходного файла
            inify: {collapseWhitespace: true},
        }),
    ],    
    module: {
        rules: [
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
            {
              test: /\.css$/i,
              use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ],  
    },
}

