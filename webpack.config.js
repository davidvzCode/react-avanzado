const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')
const path = require('path')

module.exports = {
    output: {
        filename: 'app.bundle.js',
        publicPath: '/',
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        }),
        new WebpackPwaManifestPlugin({
            name: 'Petgram - Tu app de fotos',
            short_name: 'petgram',
            description: 'Fotos de animales',
            display: 'standalone',
            scope: '/',
            start_url: '/',
            background_color: '#fff',
            theme_color: '#8d00ff',
            icons: [
                {
                    src: path.resolve('src/Assets/icon.png'),
                    size: [96, 128, 192, 256, 384, 512],
                    purpose: 'any maskable',
                },
            ],
        }),
        new WorkboxWebpackPlugin.GenerateSW({
            runtimeCaching: [
                {
                    urlPattern: new RegExp(
                        'https://(res.cloudinary.com|images.unsplash.com)'
                    ),
                    handler: 'CacheFirst',
                    options: {
                        cacheName: 'images',
                    },
                },
                {
                    urlPattern: new RegExp(
                        'https://petgram-vz-davidvzcode.vercel.app'
                    ),
                    handler: 'NetworkFirst',
                    options: {
                        cacheName: 'api',
                    },
                },
            ],
        }),
    ],
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
        ],
    },
}
