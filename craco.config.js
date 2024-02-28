var path = require('path');
var dotenv = require('dotenv');
var fs = require('fs');

module.exports = {
  webpack: {
    configure: function (config) {
      dotenv.config();

      fs.writeFileSync(
        './public/version.json',
        JSON.stringify({
          version: process.env.REACT_APP_VERSION,
        }),
        'utf-8',
      );

      return config;
    },
    alias: {
      '@config': path.resolve(__dirname, 'src/config'),
      '@common': path.resolve(__dirname, 'src/common'),
      '@model': path.resolve(__dirname, 'src/model'),
      '@core': path.resolve(__dirname, 'src/core'),
      '@module': path.resolve(__dirname, 'src/module'),
      '@component': path.resolve(__dirname, 'src/component'),
      '@page': path.resolve(__dirname, 'src/page'),
      '@layout': path.resolve(__dirname, 'src/layout'),
      '@router': path.resolve(__dirname, 'src/router'),
      '@app': path.resolve(__dirname, 'src/app'),
    },
  },
};
