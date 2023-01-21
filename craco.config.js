const webpack = require('webpack');
const path = require('path');

module.exports = {
  webpack: {
    alias: { '@': path.resolve(__dirname, 'src') },
    configure: (config) => {
      const fallback = config.resolve.fallback || {};

      Object.assign(fallback, {
        path: require.resolve('path-browserify'),
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
        assert: require.resolve('assert'),
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        os: require.resolve('os-browserify'),
        url: require.resolve('url'),
        child_process: false,
        fs: false,
      });

      config.resolve.fallback = fallback;
      config.plugins = (config.plugins || []).concat([
        new webpack.ProvidePlugin({
          process: 'process/browser',
          Buffer: ['buffer', 'Buffer'],
        }),
      ]);

      return config;
    },
  },
};
