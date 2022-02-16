const isProd = process.env.NODE_ENV === 'production';
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});


const base_config = {
    eslint: {
        // Warning: Dangerously allow production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
    trailingSlash: false,
    images: {
        domains: ['bialog-tomador.vercel.app'],
    },
    plugins: [
        [
            'babel-plugin-transform-imports',
            {
                '@material-ui/core': {
                    transform: '@material-ui/core/${member}',
                    preventFullImport: true,
                },
                '@material-ui/styles': {
                    transform: '@material-ui/styles/${member}',
                    preventFullImport: true,
                },
                '@material-ui/icons': {
                    transform: '@material-ui/icons/${member}',
                    preventFullImport: true,
                },
                '@material-ui/lab': {
                    transform: '@material-ui/lab/${member}',
                    preventFullImport: true,
                },
            },
        ],
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all"
                }
            }
        }
    }
}




module.exports = base_config;




